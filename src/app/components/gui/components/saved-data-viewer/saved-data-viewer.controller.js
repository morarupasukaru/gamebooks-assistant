let self;
class DicesController {
    /*@ngInject*/
    constructor(permanentPersistenceService, temporaryPersistenceService, constants) {
        self = this;
        self.permanentPersistenceService = permanentPersistenceService;
        self.temporaryPersistenceService = temporaryPersistenceService;
        self.constants = constants;
        self.initData();
    }

    initData() {
        // TODO listener on change
        self.localStorageData = JSON.stringify(self.permanentPersistenceService.getAppDataFromLocalStorage());
        self.cookiesData = JSON.stringify(self.temporaryPersistenceService.getAppDataFromCookies());
    }
}

export default DicesController;