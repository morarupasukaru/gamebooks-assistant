let self;
class PersistenceService {

    /*@ngInject*/
    constructor(softwareRequirementsCheckerService, messagesService) {
        self = this;
        self.isLocalStorageSupported = softwareRequirementsCheckerService.isLocalStorageSupported();
        self.messagesService = messagesService;
    }


    findKeysWithPrefix(keyPrefix) {
        if (!self.isLocalStorageSupported) {
            return null;
        }
        let keys = Object.keys(localStorage);
        let result = [];
        for (let i = 0; i < keys.length; i++) {
            if (keys[i].startsWith(keyPrefix)) {
                result.push(keys[i]);
            }
        }
        return result;
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
        for (let i = 0; i < keys.length; i++) {
            self.save(keys[i], importData[keys[i]]);
        }
    }

    export() {
        return JSON.stringify(localStorage);

    }

    cleanAllData() {
        if (!self.isLocalStorageSupported) {
            return ;
        }
        localStorage.clear();
    }
}

export default PersistenceService;