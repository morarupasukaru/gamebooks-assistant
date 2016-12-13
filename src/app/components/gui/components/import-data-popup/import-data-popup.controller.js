class ImportDataPopupController {
    /*@ngInject*/
    constructor(importDataPopupService, constants, importMethods, $window, formHelperService) {
        this.constants = constants;
        this.importDataPopupService = importDataPopupService;
        this.importMethods = importMethods;
        this.$window = $window;
        this.formHelperService = formHelperService;

        this.choices = [constants.choices.cancel, constants.choices.ok];
        this.methods = [ importMethods.text, importMethods.file ];
        this.importMethod = importMethods.text;
    }

    select(choice, form) {
        if (choice === this.constants.choices.cancel) {
            this.close(choice);
        } else if (choice === this.constants.choices.ok) {
            this.formHelperService.setErrorFieldsAsDirty(form, false);
            if (!form.$invalid) {
                let importData = null;
                if (this.importMethod === this.importMethods.text) {
                    importData = this.importTextData;
                } else if (this.importMethod === this.importMethods.file) {
                    importData = this.importUploadData;
                }
                this.close(choice, importData);
                this.importTextData = null;
                this.importUploadData = null;
            }
        }
    }

    close(choice, importData) {
        this.importDataPopupService.close(this.config.id, choice, importData);
    }

    displayImportText() {
        return !!this.importMethod && this.importMethod === this.importMethods.text;
    }

    displayUpload() {
        return !!this.importMethod && this.importMethod === this.importMethods.file;
    }

    showContent($fileContent) {
        this.importUploadData = $fileContent;
    }
}

export default ImportDataPopupController;