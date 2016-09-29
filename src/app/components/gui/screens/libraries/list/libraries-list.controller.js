class LibrariesListController {
    /*@ngInject*/
    constructor($location, preScreenLoadingInterceptorsCallerService, constants, gamePersistenceService, adventurePersistenceService, messagesService, $translate, popupService, exportDataPopupService, importDataPopupService, libraryPersistenceService) {
        this.constants = constants;
        preScreenLoadingInterceptorsCallerService.intercept();
        this.$location = $location;
        this.gamePersistenceService = gamePersistenceService;
        this.adventurePersistenceService = adventurePersistenceService;
        this.libraryPersistenceService = libraryPersistenceService;
        this.messagesService = messagesService;
        this.$translate = $translate;
        this.popupService = popupService;
        this.exportDataPopupService = exportDataPopupService;
        this.importDataPopupService = importDataPopupService;

        this.popupDeleteLibraryConfig = {
            id : 'popupDeleteLibrary',
            text : 'Are you sure to remove the selected library?',
            choices : [constants.choices.yes, constants.choices.no],
            withCloseButton : false,
            closeOnClickOutsideModal : false
        };

        this.popupExportLibrariesConfig = { id : 'popupExportLibraries' };
        this.popupImportLibrariesConfig = { id : 'popupImportLibraries' };

        this.initData();
    }

    initData() {
        this.rows = this.libraryPersistenceService.getLibraries();
        for (let i = 0; i < this.rows.length; i++) {
            if (!!this.rows[i].downloadHistory) {
                this.rows[i].lastDownloadStatus = this.rows[i].downloadHistory[this.rows[i].downloadHistory.length-1];
            }
        }
        this.clearSelection();
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
        this.$location.url(this.constants.url.libraryDetail + '/create');
    }

    display() {
        this.$location.url(this.constants.url.libraryDetail + '/' + this.getSelectedRow().id);
    }

    displayRemoveLibraryPopup() {
        let self = this;
        this.popupService.show(
            this.popupDeleteLibraryConfig.id,
            function(popupDomElementId, choice) {
                if (choice === self.constants.choices.yes) {
                    self.deleteLibrary();
                }
            }
        );
    }

    deleteLibrary() {
        this.libraryPersistenceService.deleteLibrary(this.getSelectedRow().id);
        this.initData();
    }

    displayExportLibrariesPopup() {
        let self = this;
        this.popupExportLibrariesConfig.exportData = this.libraryPersistenceService.exportLibraries();
        this.popupExportLibrariesConfig.exportDownloadBlobUrl = this.exportDataPopupService.createDownloadBlobUrl(this.popupExportLibrariesConfig.exportData);
        this.popupExportLibrariesConfig.exportTitle = this.$translate.instant('Export libraries');
        this.exportDataPopupService.show(this.popupExportLibrariesConfig.id);
    }

    displayImportLibrariesPopup() {
        let self = this;
        this.popupImportLibrariesConfig.title = this.$translate.instant('Import libraries');
        this.importDataPopupService.show(
            this.popupImportLibrariesConfig.id,
            function(popupDomElementId, data) {
                try {
                    self.libraryPersistenceService.importLibraries(data);
                    self.initData();
                } catch (error) {
                    self.messagesService.errorMessage(error, false);
                }
            }
        );
    }

    downloadLibraries() {
        let self = this;
        let promise = this.libraryPersistenceService.downloadLibrary(this.getSelectedRow());
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

export default LibrariesListController;