let self;
class TestPopupController {
    /*@ngInject*/
    constructor(preScreenLoadingInterceptorsCallerService) {
        self = this;
        preScreenLoadingInterceptorsCallerService.intercept();

        self.modalElementId = 'popupId';
        self.text = 'a question?';
        self.html = '<tr><td>blah blah</td></tr>';
        self.withCloseButton = true;
        self.choices = ['Yes', 'No'];
        self.closeOnClickOutsideModal = false;
    }

    showPopup() {
        let modalElement = window.document.getElementById(self.modalElementId);
        modalElement.style.display = "block";
    }
}

export default TestPopupController;