let self;
class GamePersistenceService {

    /*@ngInject*/
    constructor(constants, persistenceService, bookPersistenceService) {
        self = this;
        self.persistenceService = persistenceService;
        self.bookPersistenceService = bookPersistenceService;
        self.constants = constants;
    }

    getSelectedLanguage() {
        return self.persistenceService.get(self.constants.data.selectedLanguage);
    }

    setSelectedLanguage(language) {
        self.persistenceService.save(self.constants.data.selectedLanguage, language);
    }

    getLastDisplayedScreenUrl() {
        return self.persistenceService.get(self.constants.data.lastDisplayedScreenUrl);
    }

    setLastDisplayedScreenUrl(lastDisplayedScreenUrl) {
        self.persistenceService.save(self.constants.data.lastDisplayedScreenUrl, lastDisplayedScreenUrl);
    }

    addGame(game) {
        let savedGame = {
            id : self.newGameId(),
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

        self.updateGame(savedGame);
        return savedGame;
    }

    updateGame(game) {
        if (!game) {
            return ;
        }
        game = JSON.parse(JSON.stringify(game));

        let key = self.getGamePersistenceKey(game.id);
        if (!!game.items) {
            for (let i = 0; i < game.items.length; i++) {
                delete game.items[i]['$$hashKey'];
            }
        }
        self.persistenceService.save(key, game);
    }

    deleteGame(gameId, deleteParagraphNotesOfGame, deleteParagraphChoicesOfGame) {
        let game = self.getGame(gameId);
        let key = self.getGamePersistenceKey(gameId);
        if (!!deleteParagraphNotesOfGame || !!deleteParagraphChoicesOfGame) {
            let paragraphKeys = self.bookPersistenceService.getBookParagraphKeys(game.bookId);
            for (let i = 0; i < paragraphKeys.length; i++) {
                let paragraph = self.persistenceService.get(paragraphKeys[i]);
                if (!!deleteParagraphNotesOfGame && !!paragraph.notes) {
                    let newNotes = [];
                    for (let j = 0; j < paragraph.notes.length; j++) {
                        if (!paragraph.notes[j].playerName || paragraph.notes[j].playerName !== game.playerName) {
                            newNotes.push(paragraph.notes[j]);
                        }
                    }
                    paragraph.notes = newNotes;
                    self.bookPersistenceService.updateParagraph(game.bookId, paragraph);
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
        let game = self.getGame(gameId);
        if (!paragraphNr) {
            paragraphNr = game.currentParagraphNr;
        }
        let urlOfGame = "/" + encodeURIComponent(game.bookId) + "/" + encodeURIComponent(paragraphNr) + "/game/" + encodeURIComponent(game.id);
        return urlOfGame;
    }

    getGame(gameId) {
        let key = self.getGamePersistenceKey(gameId);
        return self.persistenceService.get(key);
    }

    getGamePersistenceKeys() {
        return self.persistenceService.findKeysWithPrefix(self.constants.data.game);
    }

    getGamePersistenceKey(gameId) {
        let key = gameId;
        if (!key.startsWith(self.constants.data.game)) {
            key = self.constants.data.game + "." + key;
        }
        return key;

    }

    setCurrentParagraphNrOfGame(gameId, fromParagrahNr, toParagraphNr) {
        let game = this.getGame(gameId);
        if (!!fromParagrahNr) {
            let paragraph = this.bookPersistenceService.getParagraph(game.bookId, fromParagrahNr);
            for (let i = 0; i < paragraph.choices.length; i++) {
                let choice = paragraph.choices[i];
                if (choice.paragraphNr === toParagraphNr) {
                    choice.alreadyChoosen = true;
                    break ;
                }
            }
            this.bookPersistenceService.updateParagraph(game.bookId, paragraph);
        }
        game.currentParagraphNr = toParagraphNr;
        if (!game.path) {
            game.path = [];
        }
        game.path.push(toParagraphNr);
        this.updateGame(game);
    }
}

export default GamePersistenceService;