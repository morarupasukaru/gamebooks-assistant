let self;
class DeleteDataController {

    /*@ngInject*/
    constructor(persistenceService, constants, popupService, $window) {
        self = this;
        self.persistenceService = persistenceService;
        self.constants = constants;
        self.popupService = popupService;
        self.$window = $window;

        self.popupConfirmDeleteApplicationDataConfig = {
            id : 'popupConfirmDeleteApplicationData',
            text : 'Are you sure to clear the application data?',
            choices : [constants.choices.yes, constants.choices.no],
            withCloseButton : false,
            closeOnClickOutsideModal : false
        };
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
}

export default DeleteDataController;