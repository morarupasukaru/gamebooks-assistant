class AdventuresListController {
    /*@ngInject*/
    constructor($location, constants, gamePersistenceService, adventurePersistenceService, messagesService, $translate, popupService, importDataPopupService, $stateParams) {
        this.constants = constants;
        this.$location = $location;
        this.gamePersistenceService = gamePersistenceService;
        this.adventurePersistenceService = adventurePersistenceService;
        this.messagesService = messagesService;
        this.$translate = $translate;
        this.popupService = popupService;
        this.importDataPopupService = importDataPopupService;
        this.$stateParams = $stateParams;

        this.popupDeleteAdventureConfig = {
            id : 'popupDeleteAdventure',
            text : 'Are you sure to remove the selected adventure?',
            choices : [constants.choices.yes, constants.choices.no],
            withCloseButton : false,
            closeOnClickOutsideModal : false
        };

        this.popupImportAdventureConfig = { id : 'popupImportAdventure' };

        this.popupDownloadAdventureConfig = {
            id : 'popupDownloadAdventure',
            text : 'Are you sure to download the selected adventure? Existing games could be non-playable after the update if the new version is not retro-compatible',
            choices : [constants.choices.yes, constants.choices.no],
            withCloseButton : false,
            closeOnClickOutsideModal : false
        };

        if (!!$stateParams.import) {
            this.importAdventureFromUrl($stateParams.import);
        }

        this.initAdventuresData();
    }

    initAdventuresData() {
        this.adventures = this.adventurePersistenceService.getAdventuresOverview();
        this.clearAdventureSelection();
    }

    selectAdventure(row) {
        this.clearAdventureSelection();
        row.selected = true;
        this.exportData = JSON.stringify(this.adventurePersistenceService.exportAdventure(row.id));
    }

    clearAdventureSelection() {
        for (let i = 0; i < this.adventures.length; i++) {
            this.adventures[i].selected = false;
        }
    }

    createAdventure() {
        this.$location.url(this.constants.url.adventureDetail + '/create');
    }

    displayAdventure() {
        this.$location.url(this.constants.url.adventureDetail + '/' + this.getSelectedAdventure().id);
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
        this.adventurePersistenceService.deleteAdventureAndParagraphs(this.getSelectedAdventure().id);
        this.initData();
    }

    displayImportAdventurePopup() {
        let self = this;
        this.importDataPopupService.show(
            this.popupImportAdventureConfig.id,
            function(popupDomElementId, data) {
                self.adventurePersistenceService.importAdventure(data);
                self.initData();
            }
        );
    }

    displayDownloadAdventurePopup() {
        let self = this;
        this.popupService.show(
            this.popupDownloadAdventureConfig.id,
            function(popupDomElementId, choice) {
                if (choice === self.constants.choices.yes) {
                    self.downloadAdventure();
                }
            }
        );
    }

    downloadAdventure() {
        let self = this;
        let promise = this.adventurePersistenceService.downloadAdventureWithId(this.getSelectedAdventure().id);
        promise.then(
            function(json) {
                self.initData();
            },
            function(reason) {
                self.initData();
            }
        );
    }

    hasSelectedAdventure() {
        return !!this.getSelectedAdventure();
    }

    isSelectedAdventureDownloadable() {
        let selectedRow = this.getSelectedAdventure();
        return !!selectedRow && !!selectedRow.downloadUrl;
    }

    isSelectedAdventureAvailable() {
        let selectedRow = this.getSelectedAdventure();
        return !!selectedRow && (!selectedRow.downloadUrl || !!selectedRow.downloaded);
    }

    hasAdventureToBeDownloaded(row) {
        return !!row.downloadUrl && !row.downloaded;
    }

    getSelectedAdventure() {
        if (!!this.adventures) {
            for (let i = 0; i < this.adventures.length; i++) {
                if (!!this.adventures[i].selected) {
                    return this.adventures[i];
                }
            }
        }
        return null;
    }

    importAdventureFromUrl(url) {
        let self = this;
        let promise = this.adventurePersistenceService.downloadAdventure(null, url);
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
        this.$location.url(this.constants.url.adventures);
    }
}

export default AdventuresListController;