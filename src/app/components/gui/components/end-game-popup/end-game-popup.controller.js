class EndGamePopupController {
    /*@ngInject*/
    constructor(preScreenLoadingInterceptorsCallerService, endGamePopupService, constants) {
        this.cfg = JSON.parse(this.config);
        this.constants = constants;
        this.endGamePopupService = endGamePopupService;
        this.choices = [constants.choices.yes, constants.choices.no];
    }

    select(choice) {
        this.close(choice);
    }

    close(choice) {
        this.endGamePopupService.close(this.cfg.id, choice, this.endGameReason);
    }
}

export default EndGamePopupController;