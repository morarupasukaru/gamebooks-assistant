let self;

class PermanentPersistenceService {

    /*@ngInject*/
    constructor(softwareRequirementsCheckerService, constants, $translate) {
        self = this;
        self.isLocalStorageSupported = softwareRequirementsCheckerService.isLocalStorageSupported();
        self.constants = constants;
        self.$translate = $translate;
    }

    get(key) {
        if (!self.isLocalStorageSupported) {
            return null;
        }
        let appData = self.getCurrentVersion(self.getAppDataFromLocalStorage());
        return appData[key];
    }

    save(key, value) {
        if (!self.isLocalStorageSupported) {
            return ;
        }
        let appData = self.getAppDataFromLocalStorage();
        let versionData = self.getCurrentVersion(appData);
        versionData[key] = value;
        localStorage.setItem(self.constants.data, JSON.stringify(appData));
    }

    getCurrentVersion(appData) {
        if (!self.isLocalStorageSupported) {
            return null;
        }
        if (!appData[self.constants.version]) {
            appData[self.constants.version] = {};
        }
        return appData[self.constants.version];
    }

    getAppDataFromLocalStorage() {
        if (!self.isLocalStorageSupported) {
            return null;
        }
        let key = self.constants.data;
        let appData = self.getJSONDataFromLocalStorage(key);
        if (appData === null) {
            appData = {};
            localStorage.setItem(key, JSON.stringify(appData));
        }
        return appData;
    }

    getJSONDataFromLocalStorage(key) {
        if (!self.isLocalStorageSupported) {
            return null;
        }
        let json = localStorage.getItem(key);
        if (json === null || json === "undefined" || json === undefined) {// TODO test
            return null;
        } else {
            return JSON.parse(json);
        }

    }

    cleanAllData() {
        if (!self.isLocalStorageSupported) {
            return ;
        }
        localStorage.clear();
    }
}

export default PermanentPersistenceService;