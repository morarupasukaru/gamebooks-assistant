class EndGamePopupController {
    /*@ngInject*/
    constructor(preScreenLoadingInterceptorsCallerService, endGamePopupService) {
        this.cfg = JSON.parse(this.config);
        this.endGamePopupService = endGamePopupService;
        if (this.cfg.closeOnClickOutsideModal) {
        }
    }

    select(choice) {
        this.close(choice);
    }

    close(choice) {
        this.endGamePopupService.close(this.cfg.id, choice);
    }
}

export default EndGamePopupController;