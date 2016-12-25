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


        this.popupLibraryActionsConfig = {
            id : 'popupLibraryActions',
            text : 'Choose an action',
            choices : [constants.choices.display, constants.choices.remove, constants.choices.download, constants.choices.cancel],
            withCloseButton : false,
            closeOnClickOutsideModal : false
        };

        if (!!$stateParams.import) {
            this.importLibraryUrl($stateParams.import);
        }

        this.initData();
    }

    initData() {
        this.loadPredefinedData();
        this.rows = this.libraryPersistenceService.getLibraries();
        this.exportData = this.libraryPersistenceService.exportLibraries();
    }

    loadPredefinedData() {
        if (!this.libraryPersistenceService.hasLibraryUrl('library-example.json')) {
            let libraryStr = '[{"siteName":"Example Library","libraryUrl":"library-example.json"}]';
            this.libraryPersistenceService.importLibrariesStr(libraryStr);
        }
    }

    displayActions(row) {
        let self = this;
        this.popupService.show(
            this.popupLibraryActionsConfig.id,
            function(popupDomElementId, choice) {
                if (choice === self.constants.choices.display) {
                    self.display(row);
                } else if (choice === self.constants.choices.remove) {
                    self.displayRemoveLibraryPopup(row);
                } else if (choice === self.constants.choices.download) {
                    self.downloadLibrary(row);
                }
            }
        );
    }

    create() {
        this.$location.url(this.constants.url.libraryDetail + '/create');
    }

    display(row) {
        this.$location.url(this.constants.url.libraryDetail + '/' + row.id);
    }

    displayRemoveLibraryPopup(row) {
        let self = this;
        this.popupService.show(
            this.popupDeleteLibraryConfig.id,
            function(popupDomElementId, choice) {
                if (choice === self.constants.choices.yes) {
                    self.libraryPersistenceService.deleteLibrary(row.id);
                    self.initData();
                }
            }
        );
    }

    displayImportLibrariesPopup() {
        let self = this;
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

    downloadLibrary(row) {
        let self = this;
        let promise = this.libraryPersistenceService.downloadLibrary(row, row.libraryUrl);
        promise.then(
            function(json) {
                self.initData();
            },
            function(reason) {
                self.initData();
            }
        );
    }
}

export default LibrariesListController;