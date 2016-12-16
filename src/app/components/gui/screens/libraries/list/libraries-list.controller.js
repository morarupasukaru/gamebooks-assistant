class LibrariesListController {
    /*@ngInject*/
    constructor($location,
                constants,
                gamePersistenceService,
                adventurePersistenceService,
                messagesService,
                $translate,
                popupService,
                importDataPopupService,
                libraryPersistenceService,
                $stateParams) {
        this.constants = constants;
        this.$location = $location;
        this.gamePersistenceService = gamePersistenceService;
        this.adventurePersistenceService = adventurePersistenceService;
        this.libraryPersistenceService = libraryPersistenceService;
        this.messagesService = messagesService;
        this.$translate = $translate;
        this.popupService = popupService;
        this.importDataPopupService = importDataPopupService;
        this.$stateParams = $stateParams;

        this.popupDeleteLibraryConfig = {
            id : 'popupDeleteLibrary',
            text : 'Are you sure to remove the selected library?',
            choices : [constants.choices.yes, constants.choices.no],
            withCloseButton : false,
            closeOnClickOutsideModal : false
        };

        this.popupImportLibrariesConfig = { id : 'popupImportLibraries' };

        if (!!$stateParams.import) {
            this.importLibraryUrl($stateParams.import);
        }

        this.initData();
    }

    initData() {
        this.loadPredefinedData();
        this.rows = this.libraryPersistenceService.getLibraries();
        for (let i = 0; i < this.rows.length; i++) {
            if (!!this.rows[i].downloadHistory) {
                this.rows[i].lastDownloadStatus = this.rows[i].downloadHistory[this.rows[i].downloadHistory.length-1];
            }
        }
        this.clearSelection();

        this.exportData = this.libraryPersistenceService.exportLibraries();
    }

    loadPredefinedData() {
        if (!this.libraryPersistenceService.hasLibraryUrl('library-example.json')) {
            let libraryStr = '[{"siteName":"Example Library","libraryUrl":"library-example.json"}]';
            this.libraryPersistenceService.importLibrariesStr(libraryStr);
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

    displayImportLibrariesPopup() {
        let self = this;
        this.popupImportLibrariesConfig.title = this.$translate.instant('Import libraries');
        this.importDataPopupService.show(
            this.popupImportLibrariesConfig.id,
            function(popupDomElementId, data) {
                try {
                    self.libraryPersistenceService.importLibrariesStr(data);
                    self.initData();
                } catch (error) {
                    self.$log.warn(error);
                }
            }
        );
    }

    importLibraryUrl(url) {
        let self = this;
        let promise = this.libraryPersistenceService.downloadLibraryUrl(url);
        promise.then(
            function(json) {
                self.initData();
                self.clearUrl();
            },
            function(reason) {
                self.messagesService.errorMessage(reason, false);
            }
        );
    }

    clearUrl() {
        this.$location.url(this.constants.url.libraries);
    }

    downloadLibrary() {
        let self = this;
        let selectedLibrary = this.getSelectedRow();
        let promise = this.libraryPersistenceService.downloadLibrary(selectedLibrary, selectedLibrary.libraryUrl);
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