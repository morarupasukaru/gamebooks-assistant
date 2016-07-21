let self;
class PersistenceService {

    /*@ngInject*/
    constructor(softwareRequirementsCheckerService, constants, messagesService, $rootScope) {
        self = this;
        self.isLocalStorageSupported = softwareRequirementsCheckerService.isLocalStorageSupported();
        self.constants = constants;
        self.messagesService = messagesService;


        $rootScope.appData = this.getAppDataFromLocalStorage();
        $rootScope.$watch('appData', function(newValue, oldValue) {
            // TODO WATCH DATA
        });
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

    import(dataAsString) {
        self.messagesService.clearMessages();
        if (!dataAsString) {
            self.messagesService.errorMessage('Missing import data', false);
            return ;
        }
        let importAppData = null;
        try {
            importAppData = JSON.parse(dataAsString);
        } catch(err) {
        }
        if (!importAppData) {
            self.messagesService.errorMessage('Invalid import data', false);
            return ;
        }
        localStorage.setItem(self.constants.data, JSON.stringify(importAppData));
    }

    cleanAllData() {
        if (!self.isLocalStorageSupported) {
            return ;
        }
        localStorage.clear();
    }
}

export default PersistenceService;