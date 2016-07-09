class PopupController {
    /*@ngInject*/
    constructor(preScreenLoadingInterceptorsCallerService, popupService) {
        this.cfg = JSON.parse(this.config);
        this.popupService = popupService;
        if (this.cfg.closeOnClickOutsideModal) {
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