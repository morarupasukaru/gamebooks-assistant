let self;

class TemporaryPersistenceService {

    /*@ngInject*/
    constructor($cookies, $translate, constants, softwareRequirementsCheckerService) {
        self = this;
        self.isCookiesSupported = softwareRequirementsCheckerService.isCookiesSupported();
        self.constants = constants;
        self.$cookies = $cookies;
        self.$translate = $translate;
    }

    get(key) {
        if (!self.isCookiesSupported) {
            return null;
        }
        let appData = self.getCurrentVersion(self.getAppDataFromCookies());
        return appData[key];
    }

    save(key, value) {
        if (!self.isCookiesSupported) {
            return ;
        }
        let appData = self.getAppDataFromCookies();
        let versionData = self.getCurrentVersion(appData);
        versionData[key] = value;
        self.$cookies.put(self.constants.data, JSON.stringify(appData));
    }

    getCurrentVersion(appData) {
        if (!self.isCookiesSupported) {
            return null;
        }
        if (!appData[self.constants.version]) {
            appData[self.constants.version] = {};
        }
        return appData[self.constants.version];
    }

    getAppDataFromCookies() {
        if (!self.isCookiesSupported) {
            return null;
        }
        let key = self.constants.data;
        let appData = self.getJSONDataFromCookies(key);
        if (appData === null) {
            appData = {};
            self.$cookies.put(key, JSON.stringify(appData));
        }
        return appData;
    }

    getJSONDataFromCookies(key) {
        if (!self.isCookiesSupported) {
            return null;
        }
        let json = self.$cookies.get(key);
        if (json === null || json === "undefined" || json === undefined) {
            return null;
        } else {
            return JSON.parse(json);
        }

    }

    cleanAllData() {
        if (!self.isCookiesSupported) {
            return ;
        }
        var cookies = self.$cookies.getAll();
        angular.forEach(cookies, function (v, k) {
            self.$cookies.remove(k);
        });
    }
}

export default TemporaryPersistenceService;