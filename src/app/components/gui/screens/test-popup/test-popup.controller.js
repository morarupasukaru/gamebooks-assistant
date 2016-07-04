let self;
class TestPopupController {
    /*@ngInject*/
    constructor(preScreenLoadingInterceptorsCallerService) {
        self = this;
        preScreenLoadingInterceptorsCallerService.intercept();

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
        // TODO easier way to display popup?
        let modalElement = window.document.getElementById(id);
        modalElement.style.display = "block";
    }
}

export default TestPopupController;