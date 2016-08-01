let self;
class PersistenceService {

    /*@ngInject*/
    constructor(softwareRequirementsCheckerService, constants, messagesService) {
        self = this;
        self.isLocalStorageSupported = softwareRequirementsCheckerService.isLocalStorageSupported();
        self.constants = constants;
        self.messagesService = messagesService;
    }

    getSelectedLanguage() {
        return self.get(self.constants.preferences.language);
    }

    setSelectedLanguage(language) {
        self.save(self.constants.preferences.language, language);
    }

    get(key) {
        if (!self.isLocalStorageSupported) {
            return null;
        }
        let value = localStorage.getItem(key);
        if (value === null || value === "undefined" || value === undefined) {
            return null;
        } else {
            try {
                return JSON.parse(value);
            } catch (e) {
                // cannot be parsed, must be a string
                return value;
            }
        }
    }

    save(key, value) {
        if (!self.isLocalStorageSupported) {
            return ;
        }
        if (typeof value === 'string') {
            localStorage.setItem(key, value);
        } else {
            localStorage.setItem(key, JSON.stringify(value));
        }
    }

    import(importDataAsJson) {
        if (!self.isLocalStorageSupported) {
            return ;
        }
        self.cleanAllData();
        let importData = JSON.parse(importDataAsJson);
        let keys = Object.keys(importData);
        let i;
        debugger;
        for (i = 0; i < keys.length; i++) {
            self.save(keys[i], importData[keys[i]]);
        }
    }

    cleanAllData() {
        if (!self.isLocalStorageSupported) {
            return ;
        }
        localStorage.clear();
    }

    export() {
        return JSON.parse(JSON.stringify(localStorage));

    }
}

export default PersistenceService;