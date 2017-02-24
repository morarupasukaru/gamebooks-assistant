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
            name: game.name,
            adventureId : game.adventureId,
            currentParagraphNr : game.currentParagraphNr
        };
        if (!!game.lists) {
            savedGame.lists = game.lists;
        }
        let character = this.addCharacter(game.playerName, game.stats, false);
        savedGame.characters = [];
        savedGame.characters.push(character);
        this.updateGame(savedGame);
        return savedGame;
    }

    addCharacter(characterName, stats, flagDeletable) {
        let character = {
            name : characterName,
            deletable : flagDeletable
        };

        if (!!stats) {
            character.stats = [];
            for (let i = 0; i < stats.length;i++) {
                character.stats.push({ name: stats[i].name, initial: stats[i].value, current: stats[i].value});
            }
        }
        return character;
    }

    exportGame(gameId) {
        let game = this.getGame(gameId);
        if (!!game.characters) {
            for (let i = 0; i < game.characters.length; i++) {
                delete game.characters[i]["$$hashKey"];
                if (!!game.characters[i].stats) {
                    for (let j = 0; j < game.characters[i].stats.length; j++) {
                        delete game.characters[i].stats[j]["$$hashKey"];
                    }
                }
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
                game.id = this.newGameId();
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

    deleteGame(gameId) {
        let key = this.getGamePersistenceKey(gameId);
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
            let choosenParagraphs = game.choosenParagraphs;
            if (!choosenParagraphs) {
                choosenParagraphs = [];
                game.choosenParagraphs = choosenParagraphs;
            }
            if (choosenParagraphs.indexOf(toParagraphNr) === -1) {
                choosenParagraphs.push(toParagraphNr);
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
        let choosenParagraphs = game.choosenParagraphs;
        if (!choosenParagraphs) {
            return [];
        } else {
            let paragraph = this.adventurePersistenceService.getParagraph(game.adventureId, paragraphNr);
            let choosen = [];
            let choices = this.adventurePersistenceService.getParagraphChoices(paragraph);
            if (!!choices) {
                for (let i = 0; i < choices.length; i++) {
                    if (choosenParagraphs.indexOf(choices[i]) !== -1) {
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

    startGame(adventureId, gameName) {
        let adventure = this.adventurePersistenceService.getAdventure(adventureId);
        let game = {
            name : gameName,
            adventureId : adventure.id
        };
        if (!!adventure.lists && !!adventure.lists.keys) {
            game.lists = {};
            for (let i = 0; i < adventure.lists.keys.length; i++) {
                game.lists[adventure.lists.keys[i]] = [];
            }

            let keys = Object.keys(adventure.lists.values);
            for (let i = 0; i < keys.length; i++) {
                game.lists[keys[i]] = adventure.lists.values[keys[i]];
            }
        }
        game = this.addGame(game);
        this.setCurrentParagraphNrOfGame(game.id, null, adventure.startParagraphId);
        return game;
    }

    restart(gameId) {
        let game = this.getGame(gameId);
        let adventure = this.adventurePersistenceService.getAdventure(game.adventureId);
        game.path = [];
        if (!!game.characters) {
            for (let i = 0; i < game.characters.length; i++) {
                if (!!game.characters[i].stats) {
                    for (let j = 0; j < game.characters[i].stats.length; j++) {
                        game.characters[i].stats[j].current = game.characters[i].stats[j].initial;
                    }
                }
            }
        }
        if (!!adventure.lists && !!adventure.lists.keys) {
            for (let i = 0; i < adventure.lists.keys.length; i++) {
                let key = adventure.lists.keys[i];
                let keep = !!adventure.lists.keepOnRestart && !!adventure.lists.keepOnRestart[key];
                if (!keep && !!game.lists) {
                    delete game.lists[key];
                }
                if (!!adventure.lists.values && !! adventure.lists.values[key]) {
                    if (!game.lists[key]) {
                        game.lists[key] = [];
                    }
                    for (let j = 0; j < adventure.lists.values[key].length; j++) {
                        let value = adventure.lists.values[key][j];
                        if (game.lists[key].indexOf(value) === -1) {
                            game.lists[key].push(value);
                        }
                    }
                }
            }
        }
        this.updateGame(game);
        this.setCurrentParagraphNrOfGame(gameId, null, adventure.startParagraphId);
    }
}

export default GamePersistenceService;