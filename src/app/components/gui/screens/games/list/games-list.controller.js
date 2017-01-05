class GamesListController {
    /*@ngInject*/
    constructor($location, constants, gamePersistenceService, adventurePersistenceService, messagesService, $translate, popupService, importDataPopupService, $stateParams, $window, $timeout) {
        this.constants = constants;
        this.$location = $location;
        this.gamePersistenceService = gamePersistenceService;
        this.adventurePersistenceService = adventurePersistenceService;
        this.messagesService = messagesService;
        this.$translate = $translate;
        this.popupService = popupService;
        this.importDataPopupService = importDataPopupService;
        this.$stateParams = $stateParams;
        this.$window = $window;
        this.$timeout = $timeout;

        this.popupDeleteGameConfig = {
            id : 'popupDeleteGame',
            text : 'Are you sure to remove the selected game?',
            choices : [constants.choices.yes, constants.choices.no],
            withCloseButton : false,
            closeOnClickOutsideModal : false
        };

        this.popupDeleteAdventureConfig = {
            id : 'popupDeleteAdventure',
            text : 'Are you sure to remove the selected adventure?',
            choices : [constants.choices.yes, constants.choices.no],
            withCloseButton : false,
            closeOnClickOutsideModal : false
        };

        this.popupDownloadAdventureConfig = {
            id : 'popupDownloadAdventure',
            text : 'Are you sure to download the selected adventure? Existing games could be non-playable after the update if the new version is not retro-compatible',
            choices : [constants.choices.yes, constants.choices.no],
            withCloseButton : false,
            closeOnClickOutsideModal : false
        };

        this.popupDisplaySelectedGameActionsConfig = {
            id : 'popupDisplaySelectedGameActions',
            text : 'Choose an action',
            choices : [constants.choices.continue, constants.choices.remove, constants.choices.export, constants.choices.cancel],
            withCloseButton : false,
            closeOnClickOutsideModal : false
        };

        this.popupDisplaySelectedAdventureActionsConfig = {
            id : 'popupDisplaySelectedAdventureActions',
            text : 'Choose an action',
            choices : [constants.choices.display, constants.choices.remove, constants.choices.export, constants.choices.download, constants.choices.cancel],
            withCloseButton : false,
            closeOnClickOutsideModal : false
        };

        this.popupDisplayCreateActionsConfig = {
            id : 'popupDisplayCreateActions',
            text : 'What must be created?',
            choices : [constants.choices.adventure, constants.choices.game, constants.choices.cancel],
            withCloseButton : false,
            closeOnClickOutsideModal : false
        };

        this.popupDisplayImportActionsConfig = {
            id : 'popupDisplayImportActions',
            text : 'What must be imported?',
            choices : [constants.choices.adventure, constants.choices.game, constants.choices.cancel],
            withCloseButton : false,
            closeOnClickOutsideModal : false
        };

        this.popupImportGameConfig = { id : 'popupImportGame' };

        this.popupImportAdventureConfig = { id : 'popupImportAdventure' };

        if (!!$stateParams.importGame) {
            this.importGameFromUrl($stateParams.importGame);
        } else if (!!$stateParams.importAdventure) {
            this.importAdventureFromUrl($stateParams.importAdventure);
        }

        this.initData();
    }

    initData() {
        this.adventures = this.adventurePersistenceService.getAdventuresOverview();
        this.adventures.sort(this.compareAdventure);
        let games = this.getGamesData();
        let missingAdventures = this.createMissingAdventures(this.getMissingAdventureIds(this.adventures, games));
        for (let i = 0; i < missingAdventures.length; i++) {
            this.adventures.push(missingAdventures[i]);
        }

        for (let j = 0; j < games.length; j++) {
            let game = games[j];
            for (let i = 0; i < this.adventures.length; i++) {
                let adventure = this.adventures[i];
                if (game.adventureId == adventure.id) {
                    if (!adventure.games) {
                        adventure.games = [];
                    }
                    adventure.games.push(game);
                    break;
                }
            }
        }

        for (let i = 0; i < this.adventures.length; i++) {
            if (!!this.adventures[i].games) {
                this.adventures[i].games.sort(this.compareGame);
            }
        }
    }

    getMissingAdventureIds(adventures, games) {
        let missingAdventuresIds = [];
        for (let j = 0; j < games.length; j++) {
            let game = games[j];
            let foundAdventure = false;
            for (let i = 0; i < adventures.length; i++) {
                let adventure = adventures[i];
                if (game.adventureId == adventure.id) {
                    foundAdventure = true;
                    break;
                }
            }
            if (!foundAdventure && missingAdventuresIds.indexOf(game.adventureId) === -1) {
                missingAdventuresIds.push(game.adventureId);
            }
        }
        return missingAdventuresIds;
    }

    createMissingAdventures(missingAdventureIds) {
        let missingAdventures = [];
        for (let i = 0; i < missingAdventureIds.length; i++) {
            let missingAdventure = {
                id: missingAdventureIds[i],
                name: this.$translate.instant('missing-adventure', { name: missingAdventureIds[i] }),
                games: [],
                missingAdventure: true
            };
            missingAdventures.push(missingAdventure);
        }
        missingAdventures.sort(this.compareAdventure);
        return missingAdventures;
    }

    compareAdventure(a1, a2) {
        if (!a1 && !a2) {
            return 0;
        } else if (!a1) {
            return 1;
        } else if (!a2) {
            return -1;
        } else {
            let n1 = '';
            let n2 = '';
            if (!!a1.serie) {
                n1 = n1 + 'Z' + a1.serie;
            } else {
                n1 = 'A';
            }
            if (!!a1.name) {
                n1 = n1 + a1.name;
            }
            if (!!a2.serie) {
                n2 = n2 + 'Z' + a2.serie;
            } else {
                n2 = 'A';
            }
            if (!!a2.name) {
                n2 = n2 + a2.name;
            }
            return n1.localeCompare(n2);
        }
    }

    compareGame(g1, g2) {
        if (!g1 && !g2) {
            return 0;
        } else if (!g1) {
            return 1;
        } else if (!g2) {
            return -1;
        } else {
            return g1.playerName.localeCompare(g2.playerName);
        }
    }

    getGamesData() {
        let gamePersistenceKeys = this.gamePersistenceService.getGamePersistenceKeys();
        let games = [];
        for (let i = 0; i < gamePersistenceKeys.length; i++) {
            let game = this.gamePersistenceService.getGame(gamePersistenceKeys[i]);
            game.playerName = this.getPlayerName(game);
            let adventure = this.adventurePersistenceService.getAdventure(game.adventureId);
            if (!!adventure) {
                let paragraph = this.adventurePersistenceService.getParagraph(game.adventureId, game.currentParagraphNr);
                if (!!paragraph) {
                    game.paragraphTag = paragraph.tag;
                }
            } else {
                game.adventureName = game.adventureId;
            }
            games.push(game);
        }
        return games;
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

    displaySelectedAdventureActions(adventure) {
        let self = this;
        this.popupService.show(
            this.popupDisplaySelectedAdventureActionsConfig.id,
            function(popupDomElementId, choice) {
                if (choice === self.constants.choices.display) {
                    self.displayAdventure(adventure);
                } else if (choice === self.constants.choices.remove) {
                    self.displayRemoveAdventurePopup(adventure);
                } else if (choice === self.constants.choices.export) {
                    self.exportAdventure(adventure.id);
                } else if (choice === self.constants.choices.download) {
                    self.downloadAdventure(adventure);
                }
            }
        );
    }

    displayAdventure(adventure) {
        this.$location.url(this.constants.url.adventureDetail + '/' + adventure.id);
    }

    displayRemoveAdventurePopup(adventure) {
        let self = this;
        this.popupService.show(
            this.popupDeleteAdventureConfig.id,
            function(popupDomElementId, choice) {
                if (choice === self.constants.choices.yes) {
                    self.deleteAdventure(adventure);
                }
            }
        );
    }

    deleteAdventure(adventure) {
        this.adventurePersistenceService.deleteAdventureAndParagraphs(adventure.id);
        this.initData();
    }

    exportAdventure(adventureId) {
        let exportData = JSON.stringify(this.adventurePersistenceService.exportAdventure(adventureId));
        this.exportDownloadBlobUrl = this.createDownloadBlobUrl(exportData);
        this.$timeout(function() {
            let href = window.document.getElementById('linkDownloadExportAdventure');
            href.click();
        });
    }

    displayDownloadAdventurePopup(adventure) {
        let self = this;
        this.popupService.show(
            this.popupDownloadAdventureConfig.id,
            function(popupDomElementId, choice) {
                if (choice === self.constants.choices.yes) {
                    self.downloadAdventure(adventure);
                }
            }
        );
    }

    downloadAdventure(adventure) {
        let self = this;
        let promise = this.adventurePersistenceService.downloadAdventureWithId(adventure.id);
        promise.then(
            function(json) {
                self.initData();
            },
            function(reason) {
                self.initData();
            }
        );
    }

    displayCreateActions() {
        let self = this;
        this.popupService.show(
            this.popupDisplayCreateActionsConfig.id,
            function(popupDomElementId, choice) {
                if (choice === self.constants.choices.game) {
                    self.startNewGame();
                } else if (choice === self.constants.choices.adventure) {
                    self.createAdventure();
                 }
            }
        );
    }

    displayImportActions() {
        let self = this;
        this.popupService.show(
            this.popupDisplayCreateActionsConfig.id,
            function(popupDomElementId, choice) {
                if (choice === self.constants.choices.game) {
                    self.displayImportGamePopup();
                } else if (choice === self.constants.choices.adventure) {
                    self.displayImportAdventurePopup();
                 }
            }
        );
    }

    displaySelectedGameActions(game) {
        let self = this;
        this.popupService.show(
            this.popupDisplaySelectedGameActionsConfig.id,
            function(popupDomElementId, choice) {
                if (choice === self.constants.choices.continue) {
                    self.continueGame(game);
                } else if (choice === self.constants.choices.remove) {
                    self.displayRemoveGamePopup(game);
                } else if (choice === self.constants.choices.export) {
                    self.exportGame(game.id);
                }
            }
        );
    }

    continueGame(game) {
        let adventure = this.adventurePersistenceService.getAdventure(game.adventureId);
        if (!adventure) {
            this.messagesService.errorMessage(this.$translate.instant('CannotFindAdventure', { adventure: game.adventureId}), false)
        } else {
            let nextUrl = this.gamePersistenceService.getUrlOfGame(game.id);
            this.$location.url(nextUrl);
        }
    }

    displayRemoveGamePopup(game) {
        let self = this;
        this.popupService.show(
            this.popupDeleteGameConfig.id,
            function(popupDomElementId, choice) {
                if (choice === self.constants.choices.yes) {
                    self.deleteGame(game);
                }
            }
        );
    }

    deleteGame(game) {
        this.gamePersistenceService.deleteGame(game.id, true, true);
        this.initData();
    }

    exportGame(gameId) {
        let exportData = JSON.stringify(this.gamePersistenceService.exportGame(gameId));
        this.exportDownloadBlobUrl = this.createDownloadBlobUrl(exportData);
        this.$timeout(function() {
            let href = window.document.getElementById('linkDownloadExportGame');
            href.click();
        });
    }

    createDownloadBlobUrl(data) {
        let blob = new Blob([data], { type: 'text/plain' });
        let url = this.$window.URL || this.$window.webkitURL;
        return url.createObjectURL(blob);
    }

    startNewGame() {
        let adventureKeys = this.adventurePersistenceService.getAdventurePersistenceKeys();
        if (!adventureKeys || adventureKeys.length === 0) {
            this.messagesService.errorMessage('No adventure available', false);
            return ;
        }
        this.$location.url(this.constants.url.selectAdventureForNewGame);
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

    createAdventure() {
        this.$location.url(this.constants.url.adventureDetail + '/create');
    }

    hasAdventureToBeDownloaded(row) {
        return !!row.downloadUrl && !row.downloaded;
    }
}

export default GamesListController;