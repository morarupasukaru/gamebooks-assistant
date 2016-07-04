class PopupController {
    /*@ngInject*/
    constructor(preScreenLoadingInterceptorsCallerService) {
        this.cfg = JSON.parse(this.config);
        if (this.cfg.closeOnClickOutsideModal) {
            window.onclick = function(event) {
                if (!!event.target && !!event.target.id && event.target.id === this.cfg.id) {
                    this.closePopup();
                }
            }
        }
    }


    clickChoice(choice) {
        // TODO how to return value? > use of a service?
        this.choosen = choice;
        this.closePopup();
    }

    closePopup() {
        let modalElement = window.document.getElementById(this.cfg.id);
        modalElement.style.display = "none";
    }
}

export default PopupController;