class ExportGamePopupController {
    /*@ngInject*/
    constructor(preScreenLoadingInterceptorsCallerService, exportGamePopupService, constants, exportMethods, $window, formHelperService) {
        this.constants = constants;
        this.exportGamePopupService = exportGamePopupService;
        this.exportMethods = exportMethods;
        this.$window = $window;
        this.formHelperService = formHelperService;

        this.choices = [constants.choices.cancel, constants.choices.ok];
        this.methods = [ exportMethods.text, exportMethods.file, exportMethods.email ];
        this.exportMethod = exportMethods.text;
    }

    select(choice, form) {
        this.formHelperService.setErrorFieldsAsDirty(form, false);
        if (!form.$invalid) {
            if (choice === this.constants.choices.ok) {
                if (this.displayExportEmail()) {
                    let href = window.document.getElementById('linkSendEmail');
                    window.document.getElementById('exportGameDataForm');
                    href.click();
                } else if (this.displayDownload()) {
                    let href = window.document.getElementById('linkDownload');
                    href.click();
                }
            }
            this.close(choice);
        }
    }

    close(choice) {
        this.exportGamePopupService.close(this.config.id, choice);
    }

    displayExportText() {
        return !!this.exportMethod && this.exportMethod === this.exportMethods.text;
    }

    displayDownload() {
        return !!this.exportMethod && this.exportMethod === this.exportMethods.file;
    }

    displayExportEmail() {
        return !!this.exportMethod && this.exportMethod === this.exportMethods.email;
    }

    showContent($fileContent) {
        this.content = $fileContent;
    }
}

export default ExportGamePopupController;