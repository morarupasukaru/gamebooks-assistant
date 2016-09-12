class ExportGamePopupController {
    /*@ngInject*/
    constructor(preScreenLoadingInterceptorsCallerService, exportGamePopupService, constants, exportMethods, $window) {
        this.constants = constants;
        this.exportGamePopupService = exportGamePopupService;
        this.exportMethods = exportMethods;
        this.$window = $window;

        this.choices = [constants.choices.cancel, constants.choices.ok];
        this.methods = [ exportMethods.text, exportMethods.file, exportMethods.email ];
        this.exportMethod = exportMethods.file;
    }

    select(choice) {
        this.close(choice);
    }

    close(choice) {
        this.exportGamePopupService.close(this.config.id, choice, this.endGameReason);
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

    changeDropDown() {
        if (!!this.displayExportFilePath()) {
            let blob = new Blob([this.config.exportData], { type: 'text/plain' });
            let url = this.$window.URL || this.$window.webkitURL;
            this.downloadFileUrl = url.createObjectURL(blob);
        }
    }
}

export default ExportGamePopupController;