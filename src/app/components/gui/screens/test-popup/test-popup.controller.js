let self;
class TestPopupController {
    /*@ngInject*/
    constructor(preScreenLoadingInterceptorsCallerService) {
        self = this;
        preScreenLoadingInterceptorsCallerService.intercept();

        self.popupConfig = {
            id : 'popupId',
            text : 'a question?',
            choices : ['Yes', 'No'],
            withCloseButton : true,
            closeOnClickOutsideModal : true
        };
    }

    showPopup() {
        // TODO easier way to display popup?
        let modalElement = window.document.getElementById(self.popupConfig.id);
        modalElement.style.display = "block";
    }
}

export default TestPopupController;