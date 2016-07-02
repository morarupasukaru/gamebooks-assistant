let self;
class SavedDataAdminController {
    /*@ngInject*/
    constructor(persistenceService, constants) {
        self = this;
        self.persistenceService = persistenceService;
        self.constants = constants;
        self.initData();
    }

    initData() {
        // TODO event on changes (take care of memory leak)
        self.localStorageData = JSON.stringify(self.persistenceService.getAppDataFromLocalStorage());
    }

    cleanLocalStorage() {
        var r = confirm(this.$translate.instant('organisationLoeschenConfirm'));
        if (r == true) {
            self.persistenceService.cleanAllData();
        }
    }
}

export default SavedDataAdminController;