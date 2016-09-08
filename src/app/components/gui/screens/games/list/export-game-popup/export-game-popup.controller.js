class ExportGamePopupController {
    /*@ngInject*/
    constructor(preScreenLoadingInterceptorsCallerService, exportGamePopupService, constants) {
        this.cfg = JSON.parse(this.config);
        this.constants = constants;
        this.exportGamePopupService = exportGamePopupService;
        this.choices = [constants.choices.yes, constants.choices.no];
    }

    select(choice) {
        this.close(choice);
    }

    close(choice) {
        this.exportGamePopupService.close(this.cfg.id, choice, this.endGameReason);
    }
}

export default ExportGamePopupController;