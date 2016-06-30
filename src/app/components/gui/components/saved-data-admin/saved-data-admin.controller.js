let self;
class SavedDataAdminController {
    /*@ngInject*/
    constructor(permanentPersistenceService, temporaryPersistenceService, constants) {
        self = this;
        self.permanentPersistenceService = permanentPersistenceService;
        self.temporaryPersistenceService = temporaryPersistenceService;
        self.constants = constants;
        self.initData();
    }

    initData() {
        // TODO event on changes (take care of memory leak)
        self.localStorageData = JSON.stringify(self.permanentPersistenceService.getAppDataFromLocalStorage());
        self.cookiesData = JSON.stringify(self.temporaryPersistenceService.getAppDataFromCookies());
    }

    cleanLocalStorage() {
        self.permanentPersistenceService.cleanAllData();
    }

    cleanCookies() {
        self.temporaryPersistenceService.cleanAllData();
    }
}

export default SavedDataAdminController;