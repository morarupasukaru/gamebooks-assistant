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
            text : 'Are you sure to clear the application data?',
            choices : [constants.choices.yes, constants.choices.no],
            withCloseButton : false,
            closeOnClickOutsideModal : false
        };
    }

    initData() {
        // TODO event on changes (take care of memory leak)
        self.applicationData = JSON.stringify(self.persistenceService.getAppDataFromLocalStorage());
    }

    showPopupConfirmDeleteApplicationData() {
        self.popupService.show(self.popupConfirmEmptyLocalStorageConfig.id, self.callbackPopupConfirmDeleteApplicationData);
    }

    callbackPopupConfirmDeleteApplicationData(popupDomElementId, choice) {
        if (choice === self.constants.choices.yes) {
            self.persistenceService.cleanAllData();
        }
    }
}

export default SavedDataAdminController;