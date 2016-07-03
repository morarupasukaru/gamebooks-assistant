let self;
class TestPopupController {
    /*@ngInject*/
    constructor(preScreenLoadingInterceptorsCallerService) {
        self = this;
        preScreenLoadingInterceptorsCallerService.intercept();

        self.modalElementId = 'popupId';
        self.text = 'A question?'
        self.withCloseButton = false;
        self.choices = ['Yes', 'No'];
    }

    showPopup() {
        let modalElement = window.document.getElementById(self.modalElementId);
        modalElement.style.display = "block";
    }

    closePopup(modalElementId) {
        let modalElement = window.document.getElementById(self.modalElementId);
        modalElement.style.display = "none";
    }

    clickChoice(choice) {
        self.choosen = choice;
        self.closePopup();
    }
}

export default TestPopupController;