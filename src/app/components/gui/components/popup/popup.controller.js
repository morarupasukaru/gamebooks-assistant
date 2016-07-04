let self;
class PopupController {
    /*@ngInject*/
    constructor(preScreenLoadingInterceptorsCallerService) {
        self = this;
        self.cfg = JSON.parse(self.config);
        if (self.cfg.closeOnClickOutsideModal) {
            window.onclick = function(event) {
                if (!!event.target && !!event.target.id && event.target.id === self.cfg.id) {
                    self.closePopup();
                }
            }
        }
    }

    closePopup() {
        let modalElement = window.document.getElementById(self.cfg.id);
        modalElement.style.display = "none";
    }

    clickChoice(choice) {
        // TODO how to return value? > use of a service?
        self.choosen = choice;
        self.closePopup();
    }
}

export default PopupController;