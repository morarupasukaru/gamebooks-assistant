class ExportGamePopupController {
    /*@ngInject*/
    constructor(preScreenLoadingInterceptorsCallerService, exportGamePopupService, constants, exportMethods) {
        this.cfg = JSON.parse(this.config);
        this.constants = constants;
        this.exportGamePopupService = exportGamePopupService;
        this.exportMethods = exportMethods;

        this.choices = [constants.choices.cancel, constants.choices.ok];
        this.methods = [ exportMethods.text, exportMethods.file, exportMethods.email ];
        this.exportMethod = exportMethods.file;
    }

    select(choice) {
        this.close(choice);
    }

    close(choice) {
        this.exportGamePopupService.close(this.cfg.id, choice, this.endGameReason);
    }

    displayExportText() {
        return !!this.exportMethod && this.exportMethod === this.exportMethods.text;
    }

    displayExportFilePath() {
        return !!this.exportMethod && this.exportMethod === this.exportMethods.file;
    }

    displayExportEmail() {
        return !!this.exportMethod && this.exportMethod === this.exportMethods.email;
    }
}

export default ExportGamePopupController;