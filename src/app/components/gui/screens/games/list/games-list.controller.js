class GamesListController {
    /*@ngInject*/
    constructor($location, constants, gamePersistenceService, adventurePersistenceService, messagesService, $translate, $stateParams, $window, $timeout, $mdDialog, $mdToast) {
        this.constants = constants;
        this.$location = $location;
        this.gamePersistenceService = gamePersistenceService;
        this.adventurePersistenceService = adventurePersistenceService;
        this.messagesService = messagesService;
        this.$translate = $translate;
        this.$stateParams = $stateParams;
        this.$window = $window;
        this.$timeout = $timeout;
        this.$mdDialog = $mdDialog;
        this.$mdToast = $mdToast;

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
            if (!g1.name && !g2.name) {
                return 0;
            } else if (!g1.name) {
                return 1;
            } else if (!g2.name) {
                return -1;
            } else {
                return g1.name.localeCompare(g2.name);
            }
        }
    }

    getGamesData() {
        let gamePersistenceKeys = this.gamePersistenceService.getGamePersistenceKeys();
        let games = [];
        for (let i = 0; i < gamePersistenceKeys.length; i++) {
            let game = this.gamePersistenceService.getGame(gamePersistenceKeys[i]);
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

    displayAdventure(adventure) {
        this.$location.url('adventure/' + adventure.id);
    }

    displayRemoveAdventurePopup(event, adventure) {
        let confirm = this.$mdDialog.confirm()
              .title(this.$translate.instant('Are you sure to remove the selected adventure?'))
              .targetEvent(event)
              .ok(this.$translate.instant('Yes'))
              .cancel(this.$translate.instant('No'));

        let self = this;
        this.$mdDialog.show(confirm).then(function() {
            self.deleteAdventure(adventure);
        }, function() {
            // cancel
        });
    }

    displayStartGamePopup(event, adventure) {
        let confirm = this.$mdDialog.prompt()
          .title(this.$translate.instant('Please fill the name of the game'))
          .placeholder(this.$translate.instant("Game's name"))
          .ariaLabel(this.$translate.instant("Game's name"))
          .targetEvent(event)
          //.required(true) TODO update new release of angular-material to have required available
          .ok(this.$translate.instant('Ok'))
          .cancel(this.$translate.instant('Cancel'));

        let self = this;
        this.$mdDialog.show(confirm).then(function(result) {
            self.startGame(adventure.id, result);
        }, function() {
        });
    }

    startGame(adventureId, gameName) {
        let adventure = this.adventurePersistenceService.getAdventure(adventureId);
        if (!adventure) {
            this.messagesService.errorMessage(this.$translate.instant('CannotFindAdventure', { adventure: game.adventureId}), false)
        } else {
            this.continueGame(this.gamePersistenceService.startGame(adventureId, gameName));
        }
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

    displayDownloadAdventurePopup(event, adventure) {
        if (!!adventure.games && adventure.games.length > 0) {
            let confirm = this.$mdDialog.confirm()
                   .title(this.$translate.instant('Are you sure to download the selected adventure? Existing games could be non-playable after the update if the new version is not retro-compatible'))
                   .targetEvent(event)
                   .ok(this.$translate.instant('Yes'))
                   .cancel(this.$translate.instant('No'));

             let self = this;
             this.$mdDialog.show(confirm).then(function() {
                self.downloadAdventure(adventure);
             }, function() {
                 // cancel
             });
         } else {
            this.downloadAdventure(adventure);
        }
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

    displayRestartGamePopup(event, game) {
        let confirm = this.$mdDialog.confirm()
              .title(this.$translate.instant('Are you sure to restart the selected game?'))
              .targetEvent(event)
              .ok(this.$translate.instant('Yes'))
              .cancel(this.$translate.instant('No'));

        let self = this;
        this.$mdDialog.show(confirm).then(function() {
            self.restartGame(game);
        }, function() {
            // cancel
        });
    }

    restartGame(game) {
        let adventure = this.adventurePersistenceService.getAdventure(game.adventureId);
        if (!adventure) {
            this.messagesService.errorMessage(this.$translate.instant('CannotFindAdventure', { adventure: game.adventureId}), false)
        } else {
            this.gamePersistenceService.restart(game.id);
            game = this.gamePersistenceService.getGame(game.id);
            this.continueGame(game);
        }
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

    displayRemoveGamePopup(event, game) {
        let confirm = this.$mdDialog.confirm()
              .title(this.$translate.instant('Are you sure to remove the selected game?'))
              .targetEvent(event)
              .ok(this.$translate.instant('Yes'))
              .cancel(this.$translate.instant('No'));

        let self = this;
        this.$mdDialog.show(confirm).then(function() {
            self.deleteGame(game);
        }, function() {
            // cancel
        });
    }

    deleteGame(game) {
        this.gamePersistenceService.deleteGame(game.id);
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

    displayImportGamePopup(event) {
        let self = this;
        this.$mdDialog.show({
            contentElement: '#importGameDialog',
            parent: angular.element(document.body),
            targetEvent: event,
            clickOutsideToClose: true
        }).then(
            function(answer) {
                self.gamePersistenceService.importGame(self.gameFileContent);
                self.initData();
            },
            function() {
            }
        );
    }

    notifyGameFileContent($fileContent) {
        this.gameFileContent = $fileContent;
    }

    displayImportAdventurePopup() {
        let self = this;
        this.$mdDialog.show({
            contentElement: '#importAdventureDialog',
            parent: angular.element(document.body),
            targetEvent: event,
            clickOutsideToClose: true
        }).then(
            function(answer) {
                self.adventurePersistenceService.importAdventure(self.adventureFileContent);
                self.initData();
            },
            function() {
            }
        );
    }

    notifyAdventureFileContent($fileContent) {
        this.adventureFileContent = $fileContent;
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
        this.$location.url('/games');
    }

    createAdventure() {
        this.$location.url('/adventure/create');
    }

    hasAdventureToBeDownloaded(row) {
        return !!row.downloadUrl && !row.downloaded;
    }
}

export default GamesListController;