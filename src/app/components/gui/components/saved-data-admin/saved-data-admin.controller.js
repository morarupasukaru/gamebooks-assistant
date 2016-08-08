let self;
class SavedDataAdminController {
    /*@ngInject*/
    constructor(persistenceService, constants, popupService, $window) {
        self = this;
        self.persistenceService = persistenceService;
        self.constants = constants;
        self.popupService = popupService;
        self.initData();
        self.$window = $window;

        self.popupConfirmDeleteApplicationDataConfig = {
            id : 'popupConfirmDeleteApplicationData',
            text : 'Are you sure to clear the application data?',
            choices : [constants.choices.yes, constants.choices.no],
            withCloseButton : false,
            closeOnClickOutsideModal : false
        };

        self.popupConfirmImportApplicationDataConfig = {
            id : 'popupConfirmImportApplicationData',
            text : "All existing application's data will be erased during the import. Are you sure to import the application data?",
            choices : [constants.choices.yes, constants.choices.no],
            withCloseButton : false,
            closeOnClickOutsideModal : false
        };
    }

    initData() {
        self.applicationData = JSON.stringify(self.persistenceService.export());
    }

    showPopupConfirmDeleteApplicationData() {
        self.popupService.show(self.popupConfirmDeleteApplicationDataConfig.id, self.callbackPopupConfirmDeleteApplicationData);
    }

    callbackPopupConfirmDeleteApplicationData(popupDomElementId, choice) {
        if (choice === self.constants.choices.yes) {
            self.persistenceService.cleanAllData();
            self.$window.location.reload();
        }
    }

    showPopupConfirmImportData() {
        self.popupService.show(self.popupConfirmImportApplicationDataConfig.id, self.callbackPopupConfirmImportData);
    }

    callbackPopupConfirmImportData(popupDomElementId, choice) {
        if (choice === self.constants.choices.yes) {
            self.persistenceService.import(self.importData);
            self.$window.location.reload();
        }
    }

}

export default SavedDataAdminController;