class AdventurePersistenceService {

    /*@ngInject*/
    constructor(constants, persistenceService, messagesService, $translate, $q, remoteJsonRetrieverService, $filter) {
        this.constants = constants;
        this.persistenceService = persistenceService;
        this.messagesService = messagesService;
        this.$translate = $translate;
        this.$q = $q;
        this.remoteJsonRetrieverService = remoteJsonRetrieverService;
        this.$filter = $filter;
    }

    downloadAdventureWithId(adventureId) {
        let adventure = this.getAdventure(adventureId);
        return this.downloadAdventure(adventure, adventure.downloadUrl);
    }

    downloadAdventure(adventure, downloadUrl) {
        let self = this;
        let deferred = this.$q.defer();
        let promise = this.remoteJsonRetrieverService.retrieveJson(downloadUrl);
        promise.then(
            function(json) {
                if (!!adventure) {
                    json.id = adventure.id;
                    json.downloadHistory = adventure.downloadHistory;
                } else {
                    json.id = self.getAdventureIdFromAdventureName(json.name);
                }
                self.addDownloadHistory(json, self.now() + ' : ' + self.$translate.instant('downloaded'))
                json.downloadUrl = downloadUrl;
                self.import(json);
                self.messagesService.successMessage(self.$translate.instant("AdventureDownloaded", {adventure: json.name }), false);
                deferred.resolve('Success');
            },
            function(reason) {
                if (!!adventure) {
                    self.addDownloadHistory(adventure, self.now() + ' : error')
                    self.updateAdventureWithoutParagraphs(adventure);
                }
                self.messagesService.errorMessage(reason, false);
                deferred.reject(reason);
            }
        );
        return deferred.promise;
    }

    addDownloadHistory(adventure, history) {
        if (!adventure.downloadHistory) {
            adventure.downloadHistory = [];
        }
        adventure.downloadHistory.push(history);
    }

    now() {
        let now = new Date();
        return this.$filter('date')(now, 'dd.MM.yyyy HH:mm');
    }

    updateDownloadableAdventures(adventures) {
        if (!!adventures) {
            for (let i = 0; i < adventures.length; i++) {
                this.updateDownloadableAdventure(adventures[i]);
            }
        }
    }

    updateDownloadableAdventure(adventure) {
        try {
            this.updateAdventureWithoutParagraphs(adventure);
        } catch (error) {
            if (this.constants.errors.adventureAlreadyExist === error) {
                let existingAdventure = this.getAdventure(adventure.id);
                existingAdventure.downloadUrl = adventure.downloadUrl;
                this.updateAdventureWithoutParagraphs(existingAdventure);
            }
        }
    }

    getAdventuresOverview() {
        let keys = this.getAdventurePersistenceKeys();
        let adventures = [];
        for (let i = 0; i < keys.length; i++) {
            let adventure = this.persistenceService.get(keys[i]);
            adventures.push({
                id: adventure.id,
                name : adventure.name,
                numberOfParagraphs : adventure.numberOfParagraphs,
                language : adventure.language,
                version : adventure.version,
                authors : adventure.authors,
                serie: adventure.serie,
                downloadUrl: adventure.downloadUrl,
                downloadHistory: adventure.downloadHistory,
                downloaded: adventure.downloaded
            });
        }
        return adventures;
    }

    getAdventurePersistenceKeys() {
        let keys = Object.keys(localStorage);
        let result = [];
        for (let i = 0; i < keys.length; i++) {
            if (keys[i].indexOf(this.constants.data.adventure) === 0 && keys[i].indexOf('paragraph.') === -1 && keys[i].indexOf('.choosen') === -1) {
                result.push(keys[i]);
            }
        }
        return result;
    }

    getAdventure(adventureId) {
        return this.persistenceService.get(this.getAdventurePersistenceKey(adventureId));
    }

    importAdventure(adventureAsStr) {
        try {
            let adventure = JSON.parse(adventureAsStr, true);
            this.import(adventure);
        } catch (error) {
            this.messagesService.errorMessage(this.$translate.instant('Cannot import adventure'), false);
        }
    }

    import(adventure, checkDupplicate) {
        try {
            let missingMandatoryFields = [];
            if (!adventure.id) {
                missingMandatoryFields.push('id');
            }
            if (!adventure.name) {
                missingMandatoryFields.push('name');
            }
            if (!adventure.authors) {
                missingMandatoryFields.push('authors');
            }
            if (!adventure.version) {
                missingMandatoryFields.push('version');
            }
            if (!adventure.language) {
                missingMandatoryFields.push('language');
            }
            if (!adventure.startParagraphId) {
                missingMandatoryFields.push('startParagraphId');
            }
            if (missingMandatoryFields.length > 0) {
                this.messagesService.errorMessage(this.$translate.instant("ImportGameFailedMissingFields", {missingMandatoryFields: missingMandatoryFields.join(', ') }), false);
            } else if (!!checkDupplicate && !!this.getAdventure(adventure.id)) {
                this.messagesService.errorMessage(this.$translate.instant("AdventureAlreadyExists", {adventure: adventure.id }), false);
            } else {
                if (!!adventure.paragraphs) {
                    adventure.numberOfParagraphs = adventure.paragraphs.length;
                }
                if (!!adventure.downloadUrl) {
                    adventure.downloaded = true;
                }
                this.updateAdventureWithoutParagraphs(adventure);
                if (!!adventure.paragraphs) {
                    for (let i = 0; i < adventure.paragraphs.length; i++) {
                        this.setParagraph(adventure.id, adventure.paragraphs[i], checkDupplicate);
                    }
                }
            }
        } catch (error) {
            this.messagesService.errorMessage(this.$translate.instant('Cannot import adventure'), false);
        }
    }

    updateVisibleSectionsAndParagrahTag(adventureId, paragraph, visibleSections, originalTag) {
        if (!paragraph.tag) {
            delete paragraph.tag;
        }
        this.updateParagraph(adventureId, paragraph);
        this.updateVisibleSections(adventureId, paragraph, visibleSections, originalTag);
    }

    updateVisibleSections(adventureId, paragraph, visibleSections, originalTag) {
        originalTag = this.getTag(originalTag);
        let newTag = this.getTag(paragraph.tag);
        let newVisibleSections = this.getOrCreateVisibleSections(adventureId, newTag);
        if (originalTag !== newTag) {
            this.deleteVisibleSectionsIfUnused(adventureId, originalTag);
        }

        let keys = Object.keys(visibleSections);
        for (let i = 0; i < keys.length; i++) {
            let key = keys[i];
            newVisibleSections[key] = visibleSections[key];
        }
        this.saveVisibleSections(adventureId, newVisibleSections, newTag);
    }

    deleteVisibleSectionsIfUnused(adventureId, tag) {
        let foundParagraphWithTag = false;
        let paragraphs = this.getParagraphs(adventureId);
        if (!!paragraphs) {
            for (let i = 0; i < paragraphs.length; i++) {
                let paragraph = paragraphs[i];
                if (!!paragraph.tag && tag === paragraph.tag) {
                    foundParagraphWithTag = true;
                    break;
                }
            }
        }
        if (!foundParagraphWithTag) {
            let adventure = this.getAdventure(adventureId);
            delete adventure.visibleSections[tag];
            this.updateAdventureWithoutParagraphs(adventure);
        }
    }

    getOrCreateVisibleSections(adventureId, tag) {
        tag = this.getTag(tag);
        let adventure = this.getAdventure(adventureId);
        if (!adventure.visibleSections) {
            adventure.visibleSections = {};
        }
        let tagVisibleSections = adventure.visibleSections[tag];
        if (!tagVisibleSections) {
            tagVisibleSections = {};
            if (!!adventure.toggles.map) {
                tagVisibleSections['Map'] = { value: this.$translate.instant('Map'), checked: true };
            }
            if (!!adventure.toggles.characters) {
                tagVisibleSections['Characters'] = { value: this.$translate.instant('Characters'), checked: true };
            }
            if (!!adventure.toggles.dices) {
                tagVisibleSections['Dices'] = { value: this.$translate.instant('Dices'), checked: true };
            }
            if (!adventure.lists) {
                for (let i = 0; i < adventure.lists.keys.length; i++) {
                    tagVisibleSections[adventure.lists.keys[i]] = { value: adventure.lists.keys[i], checked: true };
                }
            }
            this.saveVisibleSections(adventure.id, tagVisibleSections, tag);
        }
        return tagVisibleSections;
    }

    saveVisibleSections(adventureId, newVisibleSections, tag) {
        let adventure = this.getAdventure(adventureId);
        if (!adventure.visibleSections) {
            adventure.visibleSections = {};
        }
        adventure.visibleSections[tag] = newVisibleSections;
        this.updateAdventureWithoutParagraphs(adventure);
    }

    getTag(tag) {
        if (!tag) {
            tag = 'withoutTag';
        }
        return tag;
    }

    updateAdventureWithoutParagraphs(adventure) {
        let adventureIdFromFromAdventureName = this.getAdventureIdFromAdventureName(adventure.name);
        if (!adventure.id) {
            adventure.id = adventureIdFromFromAdventureName;
            let existingAdventure = this.getAdventure(adventureIdFromFromAdventureName);
            if (!!existingAdventure) {
                this.messagesService.errorMessage(this.$translate.instant("AdventureAlreadyExists", {adventure: adventureIdFromFromAdventureName }), false);
                throw this.constants.errors.adventureAlreadyExist;
            }
        }
        let adventureInfo = {};
        let keys = Object.keys(adventure);
        for (let i = 0; i < keys.length; i++) {
            if (keys[i] !== 'paragraphs') {
                adventureInfo[keys[i]] = adventure[keys[i]];
            }
        }
        this.persistenceService.save(this.constants.data.adventure + "." + adventure.id, adventureInfo);
    }

    getAdventureIdFromAdventureName(adventureName) {
        return encodeURIComponent(adventureName.replace(/\s+/g, '-').toLowerCase());
    }

    deleteAdventureAndParagraphs(adventureId) {
        this.persistenceService.remove(this.getAdventurePersistenceKey(adventureId));
        let paragraphKeys = this.getAdventureParagraphKeys(adventureId);
        for (let i = 0; i < paragraphKeys.length; i++) {
            this.persistenceService.remove(paragraphKeys[i]);
        }
    }

    setParagraph(adventureId, paragraph, checkDupplicate) {
        let key = this.getParagraphPersistenceKey(adventureId, paragraph.paragraphNr);
        if (!!checkDupplicate) {
            let existingParagraph = this.persistenceService.get(key);
            if (!!existingParagraph) {
                this.messagesService.errorMessage(this.$translate.instant("DupplicateParagraph", {paragraphNr: paragraph.paragraphNr }), true);
                return ;
            }
        }
        this.persistenceService.save(key, paragraph);
    }

    getOrCreateParagraph(adventureId, paragraphNr) {
        let foundParagraph = this.getParagraph(adventureId, paragraphNr);
        if (!!foundParagraph) {
            return foundParagraph;
        } else {
            let paragraph = {
                version : this.constants.version,
                adventureId : adventureId,
                paragraphNr : paragraphNr,
                description : ''
            };
            let adventure = this.getAdventure(adventureId);
            if (!adventure.numberOfParagraphs) {
                adventure.numberOfParagraphs = 0;
            }
            adventure.numberOfParagraphs = adventure.numberOfParagraphs + 1;
            this.updateAdventureWithoutParagraphs(adventure);
            this.updateParagraph(adventureId, paragraph);
            return paragraph;
        }
    }

    getParagraph(adventureId, paragraphNr) {
        let key = this.getParagraphPersistenceKey(adventureId, paragraphNr);
        return this.persistenceService.get(key);
    }

    updateParagraph(adventureId, paragraph) {
        if (!paragraph) {
            return ;
        }
        paragraph = JSON.parse(JSON.stringify(paragraph));
        let key = this.getParagraphPersistenceKey(adventureId, paragraph.paragraphNr);
        this.persistenceService.save(key, paragraph);
    }

    getParagraphChoices(currentParagraph) {
        let paragraphs = this.getDescriptionParagraphs(currentParagraph.description);
        let paragraphNrInChoices = [];
        if (!!paragraphs) {
            for (let i = 0; i < paragraphs.length; i++) {
                let paragraph = paragraphs[i];
                for (let j = 0; j < paragraph.length; j++) {
                    let part = paragraph[j];
                    if (!!part.choice) {
                        paragraphNrInChoices.push(part.text);
                    }
                }
            }
        }
        return paragraphNrInChoices;
    }

    getDescriptionParagraphs(description) {
        let lines = this.getLines(description);
        let parts = [];
        for (let i = 0; i < lines.length; i++) {
            let line = lines[i];
            let descriptionWithChoices = [];
            while (this.hasChoice(line)) {
                let indexOfFirstDelimiter = line.indexOf('§');
                let indexOfSecondDelimiter = line.indexOf('§', indexOfFirstDelimiter + 1);
                let textBeforeChoice = line.slice(0, indexOfFirstDelimiter);
                if (!!textBeforeChoice && textBeforeChoice.trim().length > 0) {
                    descriptionWithChoices.push({ choice: false, text: textBeforeChoice });
                }

                let textOfChoice = line.slice(indexOfFirstDelimiter + 1, indexOfSecondDelimiter);
                if (!!textOfChoice && textOfChoice.trim().length > 0) {
                    descriptionWithChoices.push({ choice: true, text: textOfChoice });
                }
                line = line.substr(indexOfSecondDelimiter + 1);
            }
            if (!!line && line.trim().length > 0) {
                descriptionWithChoices.push({ choice: false, text: line });
            }
            parts.push(descriptionWithChoices);
        }
        return parts;
    }

    getLines(description) {
        let lines = [];
        if (!!description) {
            let textsDelimitedWithEol = description.split('\n');
            for (let i = 0; i < textsDelimitedWithEol.length; i++) {
                let textDelimitedWithEol = textsDelimitedWithEol[i];
                if (!!textDelimitedWithEol && textDelimitedWithEol.trim().length > 0) {
                    lines.push(textDelimitedWithEol);
                }
            }
        }
        return lines;
    }

    hasChoice(text) {
        let indexOfFirstDelimiter = text.indexOf('§');
        let indexOfSecondDelimiter = text.indexOf('§', indexOfFirstDelimiter + 1);
        return indexOfFirstDelimiter !== -1 && indexOfSecondDelimiter !== -1;
    }

    getAdventureParagraphKeys(adventureId) {
        let paragraphKeys = [];
        let keys = Object.keys(localStorage);
        let keyAdventureId = this.constants.data.adventure + '.' + adventureId;
        for (let i = 0; i < keys.length; i++) {
            if (keys[i].indexOf(this.constants.data.adventure) === 0 && keys[i].indexOf('paragraph.') !== -1) {
                let adventureIdInKey = keys[i].substring(0, keys[i].indexOf('.paragraph'));
                if (adventureIdInKey === keyAdventureId) {
                    paragraphKeys.push(keys[i]);
                }
            }
        }
        return paragraphKeys;
    }

    getParagraphPersistenceKey(adventureId, paragraphNr) {
        return this.getAdventurePersistenceKey(adventureId) + ".paragraph." + paragraphNr;
    }

    getAdventurePersistenceKey(adventureId) {
        let key = adventureId;
        if (key.indexOf(this.constants.data.adventure + ".") !== 0) {
            key = this.constants.data.adventure + "." + key;
        }
        return key;
    }

    exportAdventure(adventureId) {
        let adventure = this.getAdventure(adventureId);
        if (!!adventure.stats) {
            for (let i = 0; i < adventure.stats.length; i++) {
                delete adventure.stats[i]["$$hashKey"];
            }
        }
        delete adventure.downloadHistory;
        adventure.downloadUrl;
        delete adventure.numberOfParagraphs;

        adventure = this.sortObjectKeys(adventure);

        let stats = adventure.stats;
        delete adventure.stats;
        let items = adventure.items;
        delete adventure.items;
        delete adventure.downloaded;

        adventure.items = items;
        adventure.stats = stats;
        adventure.paragraphs = this.getParagraphs(adventureId);
        return adventure;
    }

    getParagraphs(adventureId) {
        let paragraphs = [];

        let keys = Object.keys(localStorage);
        let adventureIdKeyPrefix = this.constants.data.adventure + '.' + adventureId;
        for (let i = 0; i < keys.length; i++) {
            if (keys[i].indexOf(adventureIdKeyPrefix + ".paragraph") === 0) {
                let currentAdventureIdPrefix = keys[i].substring(0, keys[i].indexOf('.paragraph'));
                if (currentAdventureIdPrefix === adventureIdKeyPrefix) {
                    let paragraph = this.persistenceService.get(keys[i]);
                    if (!!paragraph) {
                        delete paragraph.version;
                        delete paragraph.adventureId;
                        if (!!paragraph.notes && paragraph.notes.length === 0) {
                            delete paragraph.notes;
                        }
                        paragraphs.push(this.sortObjectKeys(paragraph));
                    }
                }
            }
        }
        paragraphs = this.sortParagraphs(paragraphs);
        return paragraphs;
    }

    sortObjectKeys(object) {
        let result;
        if (object == null) {
            result = object;
        } else if (Array.isArray(object)) {
            result = [];
            for (let i = 0; i < object.length; i++) {
                result.push(this.sortObjectKeys(object[i]));
            }
        } else if (typeof object === 'object') {
            let keys = Object.keys(object);
            if (!!keys && keys.length > 0) {
                keys = keys.sort();
                result = {};
                for (let i = 0; i < keys.length; i++) {
                    let value = object[keys[i]];
                    value = this.sortObjectKeys(value);
                    result[keys[i]] = value;
                }
            } else {
                result = object;
            }
        } else {
            result = object;
        }
        return result;
    }

    sortParagraphs(paragraphs) {
        return paragraphs.sort(this.compareParagraph);
    }

    compareParagraph(p1, p2) {
        if (!p1 && !p2) {
            return 0;
        } else if (!p1) {
            return 1;
        } else if (!p2) {
            return -1;
        } else {
            return p1.paragraphNr - p2.paragraphNr;
        }
    }
}

export default AdventurePersistenceService;