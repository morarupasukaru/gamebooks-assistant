class GamePersistenceService {

    /*@ngInject*/
    constructor(constants, persistenceService, bookPersistenceService) {
        this.persistenceService = persistenceService;
        this.bookPersistenceService = bookPersistenceService;
        this.constants = constants;
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
            bookId : game.bookId,
            items : game.items,
            stats : game.stats,
            currentParagraphNr : game.currentParagraphNr
        };

        savedGame.stats = [];
        for (let i = 0; i < game.stats.length;i++) {
            savedGame.stats.push({ name: game.stats[i].name, initial: game.stats[i].value, current: game.stats[i].value});
        }

        this.updateGame(savedGame);
        return savedGame;
    }

    updateGame(game) {
        if (!game) {
            return ;
        }
        game = JSON.parse(JSON.stringify(game));

        let key = this.getGamePersistenceKey(game.id);
        if (!!game.items) {
            for (let i = 0; i < game.items.length; i++) {
                delete game.items[i]['$$hashKey'];
            }
        }
        this.persistenceService.save(key, game);
    }

    deleteGame(gameId, deleteParagraphNotesOfGame, deleteParagraphChoicesOfGame) {
        let game = this.getGame(gameId);
        let key = this.getGamePersistenceKey(gameId);
        if (!!deleteParagraphNotesOfGame || !!deleteParagraphChoicesOfGame) {
            let paragraphKeys = this.bookPersistenceService.getBookParagraphKeys(game.bookId);
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
                    this.bookPersistenceService.updateParagraph(game.bookId, paragraph);
                }
                if (!!deleteParagraphChoicesOfGame) {
                    // TODO
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
        let urlOfGame = "/" + encodeURIComponent(game.bookId) + "/" + encodeURIComponent(paragraphNr) + "/game/" + encodeURIComponent(game.id);
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
        if (!key.startsWith(this.constants.data.game)) {
            key = this.constants.data.game + "." + key;
        }
        return key;

    }

    setCurrentParagraphNrOfGame(gameId, fromParagrahNr, toParagraphNr) {
        let game = this.getGame(gameId);
        if (!!fromParagrahNr) {
            let persistenceKeyChoosenParagraphs = game.bookId + '.' + 'choosen';
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
        let persistenceKeyChoosenParagraphs = game.bookId + '.' + 'choosen';
        let choosenParagraphs = this.persistenceService.get(persistenceKeyChoosenParagraphs);
        if (!choosenParagraphs) {
            return [];
        } else {
            let paragraph = this.bookPersistenceService.getParagraph(game.bookId, paragraphNr);
            let choosen = [];
            if (!!paragraph.choices) {
                for (let i = 0; i < paragraph.choices.length; i++) {
                    let keyArray = paragraph.choices[i].paragraphNr;
                    if (!!choosenParagraphs[keyArray]) {
                        choosen.push(paragraph.choices[i].paragraphNr);
                    }
                }
            }
            return choosen;
        }
    }
}

export default GamePersistenceService;