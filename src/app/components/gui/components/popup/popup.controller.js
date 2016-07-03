let self;
class PopupController {
    /*@ngInject*/
    constructor(preScreenLoadingInterceptorsCallerService) {
        self = this;
        self.modalElementId = 'popupId';
        self.text = 'a question?';
        self.html = '<tr><td>blah blah</td></tr>';
        self.withCloseButton = true;
        self.choices = ['Yes', 'No'];
        self.closeOnClickOutsideModal = true;

        if (self.closeOnClickOutsideModal) {
            window.onclick = function(event) {
                if (!!event.target && !!event.target.id && event.target.id === self.modalElementId) {
                    self.closePopup();
                }
            }
        }
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

export default PopupController;