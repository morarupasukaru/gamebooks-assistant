let self;

class TemporaryPersistenceService {

    /*@ngInject*/
    constructor($cookies, constants, softwareRequirementsChecksService) {
        self = this;
        self.isCookiesSupported = softwareRequirementsChecksService.isCookiesSupported();
        self.constants = constants;
        self.$cookies = $cookies;
    }

    get(key) {
        self.checkServiceAvailable();
        let appData = self.getCurrentVersion(self.getAppDataFromCookies());
        return appData[key];
    }

    save(key, value) {
        self.checkServiceAvailable();
        let appData = self.getAppDataFromCookies();
        let versionData = self.getCurrentVersion(appData);
        versionData[key] = value;
        self.$cookies.put(self.constants.data, JSON.stringify(appData));
    }

    getCurrentVersion(appData) {
        self.checkServiceAvailable();
        if (!appData[self.constants.version]) {
            appData[self.constants.version] = {};
        }
        return appData[self.constants.version];
    }

    getAppDataFromCookies() {
        self.checkServiceAvailable();
        let key = self.constants.data;
        let appData = self.getJSONDataFromCookies(key);
        if (appData === null) {
            appData = {};
            self.$cookies.put(key, JSON.stringify(appData));
        }
        return appData;
    }

    getJSONDataFromCookies(key) {
        self.checkServiceAvailable();
        let json = self.$cookies.get(key);
        if (json === null || json === "undefined" || json === undefined) {// TODO test
            return null;
        } else {
            return JSON.parse(json);
        }

    }

    checkServiceAvailable() {
        if (!self.isCookiesSupported) {
            throw "TemporaryPersistenceService cannot be used because cookies are not enabled in the browser.";
        }
    }
}

export default TemporaryPersistenceService;