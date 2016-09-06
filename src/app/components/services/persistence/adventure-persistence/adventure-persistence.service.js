class AdventurePersistenceService {

    /*@ngInject*/
    constructor(constants, persistenceService, messagesService, $translate) {
        this.constants = constants;
        this.persistenceService = persistenceService;
        this.messagesService = messagesService;
        this.$translate = $translate;
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
                authors : adventure.authors
            });
        }
        return adventures;
    }

    getAdventurePersistenceKeys() {
        let keys = Object.keys(localStorage);
        let result = [];
        for (let i = 0; i < keys.length; i++) {
            if (keys[i].startsWith(this.constants.data.adventure) && keys[i].indexOf('paragraph.') === -1) {
                result.push(keys[i]);
            }
        }
        return result;
    }

    getAdventure(adventureId) {
        return this.persistenceService.get(this.getAdventurePersistenceKey(adventureId));
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
        if (!key.startsWith(this.constants.data.adventure)) {
            key = this.constants.data.adventure + "." + key;
        }
        return key;
    }

    exportAdventure(adventureId) {
        let adventure = this.getAdventure(adventureId);
        adventure.paragraphs = [];

        let keys = Object.keys(localStorage);
        let adventureIdKeyPrefix = this.constants.data.adventure + '.' + adventureId;
        for (let i = 0; i < keys.length; i++) {
            if (keys[i].startsWith(adventureIdKeyPrefix + ".paragraph") !== -1) {
                let currentAdventureIdPrefix = keys[i].substring(0, keys[i].indexOf('.paragraph'));
                if (currentAdventureIdPrefix === adventureIdKeyPrefix) {
                    let paragraph = this.persistenceService.get(keys[i]);
                    if (!!paragraph) {
                        adventure.paragraphs.push(paragraph);
                    }
                }
            }
        }
        adventure.paragraphs = this.sortParagraphs(adventure.paragraphs);
        return adventure;
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