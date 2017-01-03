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

        if (!!$stateParams.importGame) {
            this.importGameFromUrl($stateParams.importGame);
        } else if (!!$stateParams.importAdventure) {
            this.importAdventureFromUrl($stateParams.importAdventure);
        }

        this.initData();
    }

    initData() {
        this.initGamesData();
        this.initAdventuresData();
    }

    initGamesData() {
        let gamePersistenceKeys = this.gamePersistenceService.getGamePersistenceKeys();
        this.games = [];
        for (let i = 0; i < gamePersistenceKeys.length; i++) {
            let game = this.gamePersistenceService.getGame(gamePersistenceKeys[i]);
            this.games.push(game);
        }

        this.completeAdventureData(this.games);
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

    selectGame(row) {
        for (let i = 0; i < this.games.length; i++) {
            this.games[i].selected = false;
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
        let game = this.gamePersistenceService.getGame(this.getSelectedGame().id);
        let adventure = this.adventurePersistenceService.getAdventure(game.adventureId);
        if (!adventure) {
            this.messagesService.errorMessage(this.$translate.instant('CannotFindAdventure', { adventure: this.getSelectedGame().id}), false)
        } else {
            let nextUrl = this.gamePersistenceService.getUrlOfGame(this.getSelectedGame().id);
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
        this.gamePersistenceService.deleteGame(this.getSelectedGame().id, true, true);
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

    hasSelectedGame() {
        return !!this.getSelectedGame();
    }


    getSelectedGame() {
        for (let i = 0; i < this.games.length; i++) {
            if (!!this.games[i].selected) {
                return this.games[i];
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
        this.$location.url(this.constants.url.games);
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
}

export default GamesListController;