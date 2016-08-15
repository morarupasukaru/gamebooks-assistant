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
        self.editedParagraphsData = self.persistenceService.getEditedParagraphs();
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