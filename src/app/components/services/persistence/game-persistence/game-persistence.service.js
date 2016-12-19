class GamePersistenceService {

    /*@ngInject*/
    constructor(constants, persistenceService, adventurePersistenceService, messagesService, $q, remoteJsonRetrieverService, $translate) {
        this.persistenceService = persistenceService;
        this.adventurePersistenceService = adventurePersistenceService;
        this.constants = constants;
        this.messagesService = messagesService;
        this.$q = $q;
        this.remoteJsonRetrieverService = remoteJsonRetrieverService;
        this.$translate = $translate;
    }

    downloadGame(url) {
        let self = this;
        let deferred = this.$q.defer();
        let promise = this.remoteJsonRetrieverService.retrieveJson(url);
        promise.then(
            function(json) {
                self.importGame(JSON.stringify(json));
                deferred.resolve('Success');
            },
            function(reason) {
                self.messagesService.errorMessage(reason, false);
                deferred.reject(reason);
            }
        );
        return deferred.promise;
    }

    getSelectedLanguage() {
        return this.persistenceService.get(this.constants.data.selectedLanguage);
    }

    setSelectedLanguage(language) {
        this.persistenceService.save(this.constants.data.selectedLanguage, language);
    }

    addGame(game) {
        let savedGame = {
            id : this.newGameId(),
            playerName : game.playerName,
            adventureId : game.adventureId,
            currentParagraphNr : game.currentParagraphNr
        };
        if (!!game.lists) {
            savedGame.lists = game.lists;
        }
        if (!!game.stats) {
            savedGame.stats = [];
            for (let i = 0; i < game.stats.length;i++) {
                savedGame.stats.push({ name: game.stats[i].name, initial: game.stats[i].value, current: game.stats[i].value});
            }
        }

        this.updateGame(savedGame);
        return savedGame;
    }

    exportGame(gameId) {
        let game = this.getGame(gameId);
        if (!!game.stats) {
            for (let i = 0; i < game.stats.length; i++) {
                delete game.stats[i]["$$hashKey"];
            }
        }
        if (!!game.characters) {
            for (let i = 0; i < game.characters.length; i++) {
                delete game.characters[i]["$$hashKey"];
            }
        }
        return this.sortObjectKeys(game);
    }

    sortObjectKeys(object) {
        let result;
        if (Array.isArray(object)) {
            result = [];
            for (let i = 0; i < object.length; i++) {
                result.push(this.sortObjectKeys(object[i]));
            }
        } else if (typeof object === 'object') {
            let keys = Object.keys(object);
            if (!!keys && keys.length > 0) {
                keys = keys.sort();
                result = {};
                for (let i = 0; i < keys.length; i++) {
                    let value = object[keys[i]];
                    value = this.sortObjectKeys(value);
                    result[keys[i]] = value;
                }
            } else {
                result = object;
            }
        } else {
            result = object;
        }
        return result;
    }

    importGame(gameAsStr) {
        try {
            let game = JSON.parse(gameAsStr);
            let missingMandatoryFields = [];
            if (!game.id) {
                missingMandatoryFields.push('id');
            }
            if (!game.playerName) {
                missingMandatoryFields.push('playerName');
            }
            if (!game.adventureId) {
                missingMandatoryFields.push('adventureId');
            }
            if (!game.currentParagraphNr) {
                missingMandatoryFields.push('currentParagraphNr');
            }

            if (missingMandatoryFields.length > 0) {
                this.messagesService.errorMessage(this.$translate.instant("ImportGameFailedMissingFields", {missingMandatoryFields: missingMandatoryFields.join(', ') }), false);
            } else if (!!this.getGame(game.id)) {
                this.messagesService.errorMessage(this.$translate.instant("GameAlreadyExists", { gameId : game.id }), false);
            } else {
                this.updateGame(game);
            }
        } catch (error) {
            this.messagesService.errorMessage(this.$translate.instant('Cannot import game'), false);
        }
    }

    updateGame(game) {
        if (!game) {
            return ;
        }
        game = JSON.parse(JSON.stringify(game));

        let key = this.getGamePersistenceKey(game.id);
        this.persistenceService.save(key, game);
    }

    deleteGame(gameId, deleteParagraphNotesOfGame, deleteParagraphChoicesOfGame) {
        // TODO deleteGame call
        let game = this.getGame(gameId);
        let key = this.getGamePersistenceKey(gameId);
        if (!!deleteParagraphNotesOfGame || !!deleteParagraphChoicesOfGame) {
            let paragraphKeys = this.adventurePersistenceService.getAdventureParagraphKeys(game.adventureId);
            for (let i = 0; i < paragraphKeys.length; i++) {
                let paragraph = this.persistenceService.get(paragraphKeys[i]);
                if (!!deleteParagraphNotesOfGame && !!paragraph.notes) {
                    let newNotes = [];
                    for (let j = 0; j < paragraph.notes.length; j++) {
                        if (!paragraph.notes[j].playerName || paragraph.notes[j].playerName !== game.playerName) {
                            newNotes.push(paragraph.notes[j]);
                        }
                    }
                    paragraph.notes = newNotes;
                    this.adventurePersistenceService.updateParagraph(game.adventureId, paragraph);
                }
            }
        }
        localStorage.removeItem(key);
    }

    newGameId() {
        return new Date().getTime().toString();
    }

    getUrlOfGame(gameId, paragraphNr) {
        let game = this.getGame(gameId);
        if (!paragraphNr) {
            paragraphNr = game.currentParagraphNr;
        }
        let urlOfGame = "/" + encodeURIComponent(game.adventureId) + "/" + encodeURIComponent(paragraphNr) + "/game/" + encodeURIComponent(game.id);
        return urlOfGame;
    }

    getGame(gameId) {
        let key = this.getGamePersistenceKey(gameId);
        return this.persistenceService.get(key);
    }

    getGamePersistenceKeys() {
        return this.persistenceService.findKeysWithPrefix(this.constants.data.game);
    }

    getGamePersistenceKey(gameId) {
        let key = gameId;
        if (key.indexOf(this.constants.data.game) !== 0) {
            key = this.constants.data.game + "." + key;
        }
        return key;

    }

    setCurrentParagraphNrOfGame(gameId, fromParagrahNr, toParagraphNr) {
        let game = this.getGame(gameId);
        if (!!fromParagrahNr) {
            let persistenceKeyChoosenParagraphs = game.adventureId + '.' + 'choosen';
            let choosenParagraphs = this.persistenceService.get(persistenceKeyChoosenParagraphs);
            if (!choosenParagraphs) {
                choosenParagraphs = {};
            }
            let keyArray = toParagraphNr;
            let choosenBy = choosenParagraphs[keyArray];
            if (!choosenBy) {
                choosenBy = [];
                choosenParagraphs[keyArray] = choosenBy;
            }
            if (choosenBy.indexOf(gameId) === -1) {
                choosenBy.push(gameId);
                this.persistenceService.save(persistenceKeyChoosenParagraphs, choosenParagraphs);
            }
        }
        game.currentParagraphNr = toParagraphNr;
        if (!game.path) {
            game.path = [];
        }
        game.path.push(toParagraphNr);
        this.updateGame(game);
    }

    getChoosenChoices(gameId, paragraphNr) {
        let game = this.getGame(gameId);
        let persistenceKeyChoosenParagraphs = game.adventureId + '.' + 'choosen';
        let choosenParagraphs = this.persistenceService.get(persistenceKeyChoosenParagraphs);
        if (!choosenParagraphs) {
            return [];
        } else {
            let paragraph = this.adventurePersistenceService.getParagraph(game.adventureId, paragraphNr);
            let choosen = [];
            let choices = this.adventurePersistenceService.getParagraphChoices(paragraph);
            if (!!choices) {
                for (let i = 0; i < choices.length; i++) {
                    if (!!choosenParagraphs[choices[i]]) {
                        choosen.push('' + choices[i]);
                    }
                }
            }
            return choosen;
        }
    }

    getGames(adventureId) {
        let gamePersistenceKeys = this.getGamePersistenceKeys();
        let games = [];
        for (let i = 0; i < gamePersistenceKeys.length; i++) {
            let game = this.getGame(gamePersistenceKeys[i]);
            if (game.adventureId === adventureId) {
                games.push(game);
            }
        }
        return games;
    }
}

export default GamePersistenceService;