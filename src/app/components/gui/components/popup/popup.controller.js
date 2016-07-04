class PopupController {
    /*@ngInject*/
    constructor(preScreenLoadingInterceptorsCallerService, popupService) {
        this.cfg = JSON.parse(this.config);
        this.popupService = popupService;
        if (this.cfg.closeOnClickOutsideModal) {
/*
            window.onclick = function(event) {
                debugger;
                if (!!event.target && !!event.target.id && event.target.id === this.cfg.id) {
                    this.closePopup();
                }
            }
                */
        }
    }

    select(choice) {
        this.close(choice);
    }

    close(choice) {
        this.popupService.close(this.cfg.id, choice);
    }
}

export default PopupController;