let self;
class TestPopupController {
    /*@ngInject*/
    constructor(preScreenLoadingInterceptorsCallerService, popupService) {
        self = this;
        preScreenLoadingInterceptorsCallerService.intercept();

        self.popupService = popupService;

        self.popupConfig1 = {
            id : 'popupId1',
            text : 'a question?',
            choices : ['Yes', 'No'],
            withCloseButton : true,
            closeOnClickOutsideModal : true
        };

        self.popupConfig2 = {
            id : 'popupId2',
            text : 'another question?',
            choices : ['Cancel', 'OK'],
            withCloseButton : false,
            closeOnClickOutsideModal : false
        };
    }

    showPopup(id) {
        self.popupService.show(id, this.callbackPopup);
    }

    callbackPopup(popupDomElementId, choice) {
        self.choosen = popupDomElementId + ': ' + choice;
    }
}

export default TestPopupController;