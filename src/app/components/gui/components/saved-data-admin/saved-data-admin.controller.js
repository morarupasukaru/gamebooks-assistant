let self;
class SavedDataAdminController {
    /*@ngInject*/
    constructor(persistenceService, constants, popupService) {
        self = this;
        self.persistenceService = persistenceService;
        self.constants = constants;
        self.popupService = popupService;
        self.initData();

        self.popupConfirmEmptyLocalStorageConfig = {
            id : 'popupConfirmEmptyLocalStorage',
            text : 'Are you sure to clear all of the content of the localStorage?',
            choices : [constants.choices.yes, constants.choices.no],
            withCloseButton : false,
            closeOnClickOutsideModal : false
        };
    }

    initData() {
        // TODO event on changes (take care of memory leak)
        self.localStorageData = JSON.stringify(self.persistenceService.getAppDataFromLocalStorage());
    }

    showPopupConfirmEmptyLocalStorage() {
        self.popupService.show(self.popupConfirmEmptyLocalStorageConfig.id, self.callbackPopupConfirmEmptyLocalStorage);
    }

    callbackPopupConfirmEmptyLocalStorage(popupDomElementId, choice) {
        if (choice === self.constants.choices.yes) {
            self.persistenceService.cleanAllData();
        }
    }
}

export default SavedDataAdminController;