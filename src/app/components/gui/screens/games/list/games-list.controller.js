class GamesListController {
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

        this.popupDeleteGameConfig = {
            id : 'popupDeleteGame',
            text : 'Are you sure to remove the selected game?',
            choices : [constants.choices.yes, constants.choices.no],
            withCloseButton : false,
            closeOnClickOutsideModal : false
        };

        this.popupExportGameConfig = { id : 'popupExportGame' };
        this.popupImportGameConfig = { id : 'popupImportGame' };

        this.initData();
    }

    initData() {
        let gamePersistenceKeys = this.gamePersistenceService.getGamePersistenceKeys();
        this.rows = [];
        for (let i = 0; i < gamePersistenceKeys.length; i++) {
            let game = this.gamePersistenceService.getGame(gamePersistenceKeys[i]);
            this.rows.push(game);
        }

        this.completeAdventureData(this.rows);
    }

    completeAdventureData(games) {
        for (let i = 0; i < games.length; i++) {
            let adventure = this.adventurePersistenceService.getAdventure(games[i].adventureId);
            if (!!adventure) {
                games[i].adventureName = adventure.name;
                games[i].serie = adventure.serie;
            } else {
                this.messagesService.errorMessage(this.$translate.instant('Cannot find adventure') + " '"  + games[i].adventureId + "'", false);
                games[i].adventureName = games[i].adventureId;
            }
        }
    }

    select(row) {
        for (let i = 0; i < this.rows.length; i++) {
            this.rows[i].selected = false;
        }
        row.selected = true;
    }

    startNewGame() {
        let adventureKeys = this.adventurePersistenceService.getAdventurePersistenceKeys();
        if (!adventureKeys || adventureKeys.length === 0) {
            this.messagesService.errorMessage('No adventure available', false);
            return ;
        }
        this.$location.url(this.constants.url.selectAdventureForNewGame);
    }

    continueGame() {
        let game = this.gamePersistenceService.getGame(this.getSelectedRow().id);
        let adventure = this.adventurePersistenceService.getAdventure(game.adventureId);
        if (!adventure) {
            this.messagesService.errorMessage('The adventure is not available', false)
        } else {
            let nextUrl = this.gamePersistenceService.getUrlOfGame(this.getSelectedRow().id);
            this.$location.url(nextUrl);
        }
    }

    displayRemoveGamePopup() {
        let self = this;
        this.popupService.show(
            this.popupDeleteGameConfig.id,
            function(popupDomElementId, choice) {
                if (choice === self.constants.choices.yes) {
                    self.deleteGame();
                }
            }
        );
    }

    deleteGame() {
        this.gamePersistenceService.deleteGame(this.getSelectedRow().id, true, true);
        this.initData();
    }

    displayExportGamePopup() {
        this.popupExportGameConfig.exportData = JSON.stringify(this.gamePersistenceService.exportGame(this.getSelectedRow().id));
        this.popupExportGameConfig.exportDownloadBlobUrl = this.exportDataPopupService.createDownloadBlobUrl(this.popupExportGameConfig.exportData);
        this.popupExportGameConfig.exportTitle = this.$translate.instant('ExportGame', {playerName: this.getSelectedRow().playerName, adventureName: this.getSelectedRow().adventureName });
        this.exportDataPopupService.show(this.popupExportGameConfig.id);
    }

    displayImportGamePopup() {
        let self = this;
        this.popupImportGameConfig.title = this.$translate.instant('Import a game');
        this.importDataPopupService.show(
            this.popupImportGameConfig.id,
            function(popupDomElementId, data) {
                self.gamePersistenceService.importGame(data);
                self.initData();
            }
        );
    }

    hasSelectedRow() {
        return !!this.getSelectedRow();
    }


    getSelectedRow() {
        for (let i = 0; i < this.rows.length; i++) {
            if (!!this.rows[i].selected) {
                return this.rows[i];
            }
        }
        return null;
    }
}

export default GamesListController;