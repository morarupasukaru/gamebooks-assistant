class GamesListController {
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

        this.popupDeleteGameConfig = {
            id : 'popupDeleteGame',
            text : 'Are you sure to remove the selected game?',
            choices : [constants.choices.yes, constants.choices.no],
            withCloseButton : false,
            closeOnClickOutsideModal : false
        };

        this.popupImportGameConfig = { id : 'popupImportGame' };

        if (!!$stateParams.import) {
            this.importGameFromUrl($stateParams.import);
        }

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
            let game = games[i];
            game.playerName = this.getPlayerName(game);
            let adventure = this.adventurePersistenceService.getAdventure(games[i].adventureId);
            if (!!adventure) {
                games[i].adventureName = adventure.name;
                games[i].serie = adventure.serie;
                let paragraph = this.adventurePersistenceService.getParagraph(games[i].adventureId, games[i].currentParagraphNr);
                if (!!paragraph) {
                    games[i].paragraphTag = paragraph.tag;
                }
            } else {
                this.messagesService.errorMessage(this.$translate.instant('CannotFindAdventure', { adventure: games[i].adventureId}), false);
                games[i].adventureName = games[i].adventureId;
            }
        }
    }

    getPlayerName(game) {
        if (!!game.characters) {
            for (let i = 0; i < game.characters.length; i++) {
                if (!game.characters[i].deletable) {
                    return game.characters[i].name;
                }
            }
        }
    }

    select(row) {
        for (let i = 0; i < this.rows.length; i++) {
            this.rows[i].selected = false;
        }
        row.selected = true;
        this.exportData = JSON.stringify(this.gamePersistenceService.exportGame(row.id));
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
            this.messagesService.errorMessage(this.$translate.instant('CannotFindAdventure', { adventure: this.getSelectedRow().id}), false)
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

    displayImportGamePopup() {
        let self = this;
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

    importGameFromUrl(url) {
        let self = this;
        let promise = this.gamePersistenceService.downloadGame(url);
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
        this.$location.url(this.constants.url.games);
    }
}

export default GamesListController;