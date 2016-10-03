class AdventuresListController {
    /*@ngInject*/
    constructor($location, preScreenLoadingInterceptorsCallerService, constants, gamePersistenceService, adventurePersistenceService, messagesService, $translate, popupService, exportDataPopupService, importDataPopupService) {
        this.constants = constants;
        preScreenLoadingInterceptorsCallerService.intercept();
        this.$location = $location;
        this.gamePersistenceService = gamePersistenceService;
        this.adventurePersistenceService = adventurePersistenceService;
        this.messagesService = messagesService;
        this.$translate = $translate;
        this.popupService = popupService;
        this.exportDataPopupService = exportDataPopupService;
        this.importDataPopupService = importDataPopupService;

        this.popupDeleteAdventureConfig = {
            id : 'popupDeleteAdventure',
            text : 'Are you sure to remove the selected adventure?',
            choices : [constants.choices.yes, constants.choices.no],
            withCloseButton : false,
            closeOnClickOutsideModal : false
        };

        this.popupExportAdventureConfig = { id : 'popupExportAdventure' };
        this.popupImportAdventureConfig = { id : 'popupImportAdventure' };

        this.initData();
    }

    initData() {
        this.rows = this.adventurePersistenceService.getAdventuresOverview();
        this.clearSelection();
        for (let i = 0; i < this.rows.length; i++) {
            if (!!this.rows[i].downloadHistory) {
                this.rows[i].downloadStatus = this.rows[i].downloadHistory[this.rows[i].downloadHistory.length-1];
            } else {
                if (!!this.rows[i].downloadUrl) {
                    this.rows[i].downloadStatus = 'Downloadable';
                } else {
                    this.rows[i].downloadStatus = 'N/A';
                }
            }
        }
    }

    select(row) {
        this.clearSelection();
        row.selected = true;
    }

    clearSelection() {
        for (let i = 0; i < this.rows.length; i++) {
            this.rows[i].selected = false;
        }
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
        this.popupExportAdventureConfig.exportData = JSON.stringify(this.adventurePersistenceService.exportAdventure(this.getSelectedRow().id));
        this.popupExportAdventureConfig.exportDownloadBlobUrl = this.exportDataPopupService.createDownloadBlobUrl(this.popupExportAdventureConfig.exportData);
        this.popupExportAdventureConfig.exportTitle = this.$translate.instant('ExportAdventure', {adventureName: this.getSelectedRow().name });
        this.exportDataPopupService.show(this.popupExportAdventureConfig.id);
    }

    displayImportAdventurePopup() {
        let self = this;
        this.popupImportAdventureConfig.title = this.$translate.instant('Import an adventure');
        this.importDataPopupService.show(
            this.popupImportAdventureConfig.id,
            function(popupDomElementId, data) {
                self.adventurePersistenceService.importAdventure(data);
                self.initData();
            }
        );
    }

    downloadAdventure() {
        let self = this;
        let promise = this.adventurePersistenceService.downloadAdventure(this.getSelectedRow().id);
        promise.then(
            function(json) {
                self.initData();
            },
            function(reason) {
                self.initData();
            }
        );
    }

    hasSelectedRow() {
        return !!this.getSelectedRow();
    }

    isSelectedRowDownloadable() {
        let selectedRow = this.getSelectedRow();
        return !!selectedRow && !!selectedRow.downloadUrl;
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