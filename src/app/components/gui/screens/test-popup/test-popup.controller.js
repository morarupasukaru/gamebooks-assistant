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
        self.closeOnClickOutsideModal = false;

        if (self.closeOnClickOutsideModal) {
            window.onclick = function(event) {
                if (!!event.target && !!event.target.id && event.target.id === self.modalElementId) {
                    self.closePopup();
                }
            }
        }
    }

    showPopup() {
        let modalElement = window.document.getElementById(self.modalElementId);
        modalElement.style.display = "block";
    }

    closePopup() {
        let modalElement = window.document.getElementById(self.modalElementId);
        modalElement.style.display = "none";
    }

    clickChoice(choice) {
        self.choosen = choice;
        self.closePopup();
    }
}

export default TestPopupController;