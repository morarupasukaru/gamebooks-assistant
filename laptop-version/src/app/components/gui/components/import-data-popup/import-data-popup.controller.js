class ImportDataPopupController {
    /*@ngInject*/
    constructor(importDataPopupService, constants, $window) {
        this.constants = constants;
        this.importDataPopupService = importDataPopupService;
        this.$window = $window;
        this.choices = [constants.choices.cancel, constants.choices.ok];
    }

    select(choice, form) {
        if (choice === this.constants.choices.cancel) {
            this.close(choice);
        } else if (choice === this.constants.choices.ok) {
            let importData = this.importUploadData;
            this.close(choice, importData);
            this.importUploadData = null;
        }
    }

    close(choice, importData) {
        this.importDataPopupService.close(this.config.id, choice, importData);
    }

    showContent($fileContent) {
        this.importUploadData = $fileContent;
    }
}

export default ImportDataPopupController;