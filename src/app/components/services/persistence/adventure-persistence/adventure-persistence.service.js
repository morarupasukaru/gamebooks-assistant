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

    downloadAdventure(adventureId) {
        let adventure = this.getAdventure(adventureId);
        let self = this;
        let deferred = this.$q.defer();
        let promise = this.remoteJsonRetrieverService.retrieveJson(adventure.downloadUrl);
        promise.then(
            function(json) {
                self.addDownloadHistory(adventure, self.now() + ' : downloaded')
                json.id = adventure.id;
                json.downloadHistory = adventure.downloadHistory;
                json.downloadUrl = adventure.downloadUrl;
                self.import(json);
                self.messagesService.successMessage('The selected adventure is downloaded/updated', false);
                deferred.resolve('Success');
            },
            function(reason) {
                self.addDownloadHistory(adventure, self.now() + ' : error')
                self.updateAdventureWithoutParagraphs(adventure);
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
                downloadHistory: adventure.downloadHistory
            });
        }
        return adventures;
    }

    getAdventurePersistenceKeys() {
        let keys = Object.keys(localStorage);
        let result = [];
        for (let i = 0; i < keys.length; i++) {
            if (keys[i].startsWith(this.constants.data.adventure) && keys[i].indexOf('paragraph.') === -1 && keys[i].indexOf('.choosen') === -1) {
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
            this.messagesService.errorMessage('Cannot import adventure', false);
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
            if (!adventure.startParagraphNr) {
                missingMandatoryFields.push('startParagraphNr');
            }
            if (missingMandatoryFields.length > 0) {
                this.messagesService.errorMessage('Cannot import game because of missing mandatory fields: ' + missingMandatoryFields.join(', '), false);
            } else if (!!checkDupplicate && !!this.getAdventure(adventure.id)) {
                this.messagesService.errorMessage("The adventure already exists with id '" + adventure.id + "'", false);
            } else {
                if (!!adventure.paragraphs) {
                    adventure.numberOfParagraphs = adventure.paragraphs.length;
                }
                this.updateAdventureWithoutParagraphs(adventure);
                if (!!adventure.paragraphs) {
                    for (let i = 0; i < adventure.paragraphs.length; i++) {
                        this.setParagraph(adventure.id, adventure.paragraphs[i], checkDupplicate);
                    }
                }
            }
        } catch (error) {
            this.messagesService.errorMessage('Cannot import adventure', false);
        }
    }

    updateAdventureWithoutParagraphs(adventure) {
        let adventureIdFromFromAdventureName = this.getAdventureIdFromAdventureName(adventure.name);
        if (!adventure.id) {
            adventure.id = adventureIdFromFromAdventureName;
            let existingAdventure = this.getAdventure(adventureIdFromFromAdventureName);
            if (!!existingAdventure) {
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
        this.checkDupplicateChoices(paragraph);
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
                paragraphNr : new Number(paragraphNr),
                description : '',
                choices : []
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
        if (!!paragraph.choices) {
            for (let i = 0; i < paragraph.choices.length; i++) {
                delete paragraph.choices[i]['$$hashKey'];
            }
        }
        this.checkDupplicateChoices(paragraph);
        this.persistenceService.save(key, paragraph);
    }

    checkDupplicateChoices(paragraph) {
        if (!!paragraph && !!paragraph.choices) {
            let choices = [];
            for (let i = 0; i < paragraph.choices.length; i++) {
                if (choices.indexOf(paragraph.choices[i].paragraphNr) !== -1) {
                    this.messagesService.errorMessage(this.$translate.instant("DupplicateParagraphChoices", {paragraphNr: paragraph.paragraphNr, choiceParagraphNr : paragraph.choices[i].paragraphNr }), true);
                }
                choices.push(paragraph.choices[i].paragraphNr);
            }
        }
    }

    getAdventureParagraphKeys(adventureId) {
        let paragraphKeys = [];
        let keys = Object.keys(localStorage);
        let keyAdventureId = this.constants.data.adventure + '.' + adventureId;
        for (let i = 0; i < keys.length; i++) {
            if (keys[i].startsWith(this.constants.data.adventure) && keys[i].indexOf('paragraph.') !== -1) {
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
        if (!key.startsWith(this.constants.data.adventure + ".")) {
            key = this.constants.data.adventure + "." + key;
        }
        return key;
    }

    exportAdventure(adventureId) {
        let adventure = this.getAdventure(adventureId);
        for (let i = 0; i < adventure.stats.length; i++) {
            delete adventure.stats[i]["$$hashKey"];
        }

        adventure = this.sortObjectKeys(adventure);

        let stats = adventure.stats;
        delete adventure.stats;
        let items = adventure.items;
        delete adventure.items;

        adventure.items = items;
        adventure.stats = stats;
        adventure.paragraphs = [];

        let keys = Object.keys(localStorage);
        let adventureIdKeyPrefix = this.constants.data.adventure + '.' + adventureId;
        for (let i = 0; i < keys.length; i++) {
            if (keys[i].startsWith(adventureIdKeyPrefix + ".paragraph") !== -1) {
                let currentAdventureIdPrefix = keys[i].substring(0, keys[i].indexOf('.paragraph'));
                if (currentAdventureIdPrefix === adventureIdKeyPrefix) {
                    let paragraph = this.persistenceService.get(keys[i]);
                    if (!!paragraph) {
                        delete paragraph.version;
                        delete paragraph.adventureId;
                        adventure.paragraphs.push(this.sortObjectKeys(paragraph));
                    }
                }
            }
        }
        adventure.paragraphs = this.sortParagraphs(adventure.paragraphs);
        return adventure;
    }

    sortObjectKeys(object) {
        let result;
        if (Array.isArray(object)) {
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