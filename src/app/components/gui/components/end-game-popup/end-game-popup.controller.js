let self;
class EndGamePopupController {
    /*@ngInject*/
    constructor(preScreenLoadingInterceptorsCallerService, endGamePopupService, constants) {
        this.cfg = JSON.parse(this.config);
        self = this;
        self.constants = constants;
        self.endGamePopupService = endGamePopupService;
        self.choices = [constants.choices.yes, constants.choices.no];
    }

    select(choice) {
        this.close(choice);
    }

    close(choice) {
        this.endGamePopupService.close(this.cfg.id, choice, self.endGameReason);
    }
}

export default EndGamePopupController;