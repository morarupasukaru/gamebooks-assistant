let self;

class PermanentPersistenceService {

    /*@ngInject*/
    constructor(softwareRequirementsChecksService, constants) {
        self = this;
        self.isLocalStorageSupported = softwareRequirementsChecksService.isLocalStorageSupported();
        self.constants = constants;
    }

    get(key) {
        self.checkServiceAvailable();
        let appData = self.getCurrentVersion(self.getAppDataFromLocalStorage());
        return appData[key];
    }

    save(key, value) {
        self.checkServiceAvailable();
        let appData = self.getAppDataFromLocalStorage();
        let versionData = self.getCurrentVersion(appData);
        versionData[key] = value;
        localStorage.setItem(self.constants.data, JSON.stringify(appData));
    }

    getCurrentVersion(appData) {
        self.checkServiceAvailable();
        if (!appData[self.constants.version]) { // TODO test
            appData[self.constants.version] = {};
        }
        return appData[self.constants.version];
    }

    getAppDataFromLocalStorage() {
        self.checkServiceAvailable();
        let key = self.constants.data;
        let appData = self.getJSONDataFromLocalStorage(key);
        if (appData === null) {
            appData = {};
            localStorage.setItem(key, JSON.stringify(appData));
        }
        return appData;
    }

    getJSONDataFromLocalStorage(key) {
        self.checkServiceAvailable();
        let json = localStorage.getItem(key);
        if (json === null || json === "undefined" || json === undefined) {// TODO test
            return null;
        } else {
            return JSON.parse(json);
        }

    }

    checkServiceAvailable() {
        if (!self.isLocalStorageSupported) {
            throw "PermanentPersistenceService cannot be used because localStorage is not supported or not enabled in the browser.";
        }
    }
}

export default PermanentPersistenceService;