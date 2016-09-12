class AdventuresListController {
    /*@ngInject*/
    constructor($location, preScreenLoadingInterceptorsCallerService, constants, gamePersistenceService, adventurePersistenceService, messagesService, $translate, popupService, exportDataPopupService) {
        this.constants = constants;
        preScreenLoadingInterceptorsCallerService.intercept();
        this.$location = $location;
        this.gamePersistenceService = gamePersistenceService;
        this.adventurePersistenceService = adventurePersistenceService;
        this.messagesService = messagesService;
        this.$translate = $translate;
        this.popupService = popupService;
        this.exportDataPopupService = exportDataPopupService;

        this.popupDeleteAdventureConfig = {
            id : 'popupDeleteAdventure',
            text : 'Are you sure to remove the selected adventure?',
            choices : [constants.choices.yes, constants.choices.no],
            withCloseButton : false,
            closeOnClickOutsideModal : false
        };

        this.popupExportAdventureConfig = { id : 'popupExportAdventure' };

        this.initData();
    }

    initData() {
        this.rows = this.adventurePersistenceService.getAdventuresOverview();
    }

    select(row) {
        for (let i = 0; i < this.rows.length; i++) {
            this.rows[i].selected = false;
        }
        row.selected = true;
    }

    create() {
        this.$location.url(this.constants.url.adventureDetail + '/create');
    }

    display() {
        this.$location.url(this.constants.url.adventureDetail + '/' + this.getSelectedRow().id);
    }

    displayRemoveAdventurePopup() {
        let self = this;
        this.popupService.show(
            this.popupDeleteAdventureConfig.id,
            function(popupDomElementId, choice) {
                if (choice === self.constants.choices.yes) {
                    self.deleteAdventure();
                }
            }
        );
    }

    deleteAdventure() {
        this.adventurePersistenceService.deleteAdventureAndParagraphs(this.getSelectedRow().id);
        this.initData();
    }

    displayExportAdventurePopup() {
        let self = this;
        this.popupExportAdventureConfig.exportData = JSON.stringify(this.adventurePersistenceService.getAdventure(this.getSelectedRow().id));
        this.popupExportAdventureConfig.exportDownloadBlobUrl = this.exportDataPopupService.createDownloadBlobUrl(this.popupExportAdventureConfig.exportData);
        this.popupExportAdventureConfig.exportTitle = this.$translate.instant('ExportAdventure', {adventureName: this.getSelectedRow().name });
        this.exportDataPopupService.show(
            this.popupExportAdventureConfig.id,
            function(popupDomElementId, choice) {}
        );
    }

    hasSelectedRow() {
        return !!this.getSelectedRow();
    }


    getSelectedRow() {
        if (!!this.rows) {
            for (let i = 0; i < this.rows.length; i++) {
                if (!!this.rows[i].selected) {
                    return this.rows[i];
                }
            }
        }
        return null;
    }
}

export default AdventuresListController;