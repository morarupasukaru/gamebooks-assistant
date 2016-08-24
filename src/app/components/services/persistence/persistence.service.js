let self;
class PersistenceService {

    /*@ngInject*/
    constructor(softwareRequirementsCheckerService, constants, messagesService, booksService) {
        self = this;
        self.isLocalStorageSupported = softwareRequirementsCheckerService.isLocalStorageSupported();
        self.constants = constants;
        self.messagesService = messagesService;
        self.booksService = booksService;
    }

    getSelectedLanguage() {
        return self.get(self.constants.data.selectedLanguage);
    }

    setSelectedLanguage(language) {
        self.save(self.constants.data.selectedLanguage, language);
    }

    getLastDisplayedScreenUrl() {
        return self.get(self.constants.data.lastDisplayedScreenUrl);
    }

    setLastDisplayedScreenUrl(lastDisplayedScreenUrl) {
        self.save(self.constants.data.lastDisplayedScreenUrl, lastDisplayedScreenUrl);
    }

    getBookPersistenceKeys() {
        if (!self.isLocalStorageSupported) {
            return null;
        }
        let keys = Object.keys(localStorage);
        let result = [];
        for (let i = 0; i < keys.length; i++) {
            if (keys[i].startsWith(self.constants.data.book) && keys[i].indexOf('paragraph.') === -1) {
                result.push(keys[i]);
            }
        }
        return result;
    }

    findKeysWithPrefix(keyPrefix) {
        if (!self.isLocalStorageSupported) {
            return null;
        }
        let keys = Object.keys(localStorage);
        let result = [];
        for (let i = 0; i < keys.length; i++) {
            if (keys[i].startsWith(keyPrefix)) {
                result.push(keys[i]);
            }
        }
        return result;
    }

    getBook(bookId) {
        return self.get(self.getBookPersistenceKey(bookId));
    }

    setBook(book) {
        let bookInfo = {};
        let keys = Object.keys(book);
        for (let i = 0; i < keys.length; i++) {
            if (keys[i] !== 'paragraphs') {
                bookInfo[keys[i]] = book[keys[i]];
            }
        }
        self.save(self.constants.data.book + "." + book.id, bookInfo);
    }

    setParagraph(bookId, paragraph) {
        let key = self.getParagraphPersistenceKey(bookId, paragraph.paragraphNr);
        self.save(key, paragraph);
    }

    getOrCreateParagraph(bookId, paragraphNr) {
        let foundParagraph = self.getParagraph(bookId, paragraphNr);
        if (!!foundParagraph) {
            return foundParagraph;
        } else {
            let paragraph = {
                version : self.constants.version,
                bookId : bookId,
                paragraphNr : new Number(paragraphNr),
                description : '',
                choices : []
            };
            self.updateParagraph(bookId, paragraph);
            return paragraph;
        }
    }

    getParagraph(bookId, paragraphNr) {
        let key = self.getParagraphPersistenceKey(bookId, paragraphNr);
        return self.get(key);
    }

    updateParagraph(bookId, paragraph) {
        if (!paragraph) {
            return ;
        }
        paragraph = JSON.parse(JSON.stringify(paragraph));
        let key = self.getParagraphPersistenceKey(bookId, paragraph.paragraphNr);
        if (!!paragraph.choices) {
            for (let i = 0; i < paragraph.choices.length; i++) {
                delete paragraph.choices[i]['$$hashKey'];
            }
        }
        self.save(key, paragraph);
    }

    getParagraphPersistenceKey(bookId, paragraphNr) {
        return self.getBookPersistenceKey(bookId) + ".paragraph." + paragraphNr;
    }

    getBookPersistenceKey(bookId) {
        let key = bookId;
        if (!key.startsWith(self.constants.data.book)) {
            key = self.constants.data.book + "." + key;
        }
        return key;
    }

    addGame(game) {
        let savedGame = {
            id : self.newId(),
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
        self.save(key, game);
    }

    deleteGame(gameId, deleteParagraphNotesOfGame, deleteParagraphChoicesOfGame) {
        let game = self.getGame(gameId);
        let key = self.getGamePersistenceKey(gameId);
        if (!!deleteParagraphNotesOfGame || !!deleteParagraphChoicesOfGame) {
            let paragraphKeys = self.getBookParagraphKeys(game.bookId);
            for (let i = 0; i < paragraphKeys.length; i++) {
                let paragraph = self.get(paragraphKeys[i]);
                if (!!deleteParagraphNotesOfGame && !!paragraph.notes) {
                    let newNotes = [];
                    for (let j = 0; j < paragraph.notes.length; j++) {
                        if (!paragraph.notes[j].playerName || paragraph.notes[j].playerName !== game.playerName) {
                            newNotes.push(paragraph.notes[j]);
                        }
                    }
                    paragraph.notes = newNotes;
                    self.updateParagraph(game.bookId, paragraph);
                }
                if (!!deleteParagraphChoicesOfGame) {
                    // TODO
                }
            }
        }
        localStorage.removeItem(key);
    }

    newId() {
        return new Date().getTime().toString();
    }

    setCurrentParagraphNrOfGame(gameId, fromParagrahNr, toParagraphNr) {
        let game = this.getGame(gameId);
        if (!!fromParagrahNr) {
            let paragraph = this.getParagraph(game.bookId, fromParagrahNr);
            for (let i = 0; i < paragraph.choices.length; i++) {
                let choice = paragraph.choices[i];
                if (choice.paragraphNr === toParagraphNr) {
                    choice.alreadyChoosen = true;
                    break ;
                }
            }
            this.updateParagraph(game.bookId, paragraph);
        }
        game.currentParagraphNr = toParagraphNr;
        if (!game.path) {
            game.path = [];
        }
        game.path.push(toParagraphNr);
        this.updateGame(game);
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
        return self.get(key);
    }

    getGamePersistenceKeys() {
        return self.findKeysWithPrefix(self.constants.data.game);
    }

    getGamePersistenceKey(gameId) {
        let key = gameId;
        if (!key.startsWith(self.constants.data.game)) {
            key = self.constants.data.game + "." + key;
        }
        return key;

    }

    get(key) {
        if (!self.isLocalStorageSupported) {
            return null;
        }
        let value = localStorage.getItem(key);
        if (value === null || value === "undefined" || value === undefined) {
            return null;
        } else {
            try {
                return JSON.parse(value);
            } catch (e) {
                // cannot be parsed, must be a string
                return value;
            }
        }
    }

    save(key, value) {
        if (!self.isLocalStorageSupported) {
            return ;
        }
        if (typeof value === 'string') {
            localStorage.setItem(key, value);
        } else {
            localStorage.setItem(key, JSON.stringify(value));
        }
    }

    import(importDataAsJson) {
        if (!self.isLocalStorageSupported) {
            return ;
        }
        self.cleanAllData();
        let importData = JSON.parse(importDataAsJson);
        let keys = Object.keys(importData);
        for (let i = 0; i < keys.length; i++) {
            self.save(keys[i], importData[keys[i]]);
        }
    }

    cleanAllData() {
        if (!self.isLocalStorageSupported) {
            return ;
        }
        localStorage.clear();
    }

    export() {
        this.getEditedParagraphs();
        return localStorage;

    }

    getEditedParagraphs() {
        // TODO exportBook
        if (!self.isLocalStorageSupported) {
            return null;
        }
        let keys = Object.keys(localStorage);
        let result = {};
        let mapEditedParagraph = [];
        for (let i = 0; i < keys.length; i++) {
            if (keys[i].startsWith(self.constants.data.book) && keys[i].indexOf('paragraph.') !== -1) {
                let bookId = keys[i].substring(0, keys[i].indexOf('.paragraph'));
                let paragraph = self.get(keys[i]);
                if (!mapEditedParagraph[paragraph.paragraphNr]) {
                    if (!result[bookId]) {
                        result[bookId] = { paragraphs : [] };
                    }
                    if (!!paragraph) {
                        result[bookId].paragraphs.push(paragraph);
                        mapEditedParagraph[paragraph.paragraphNr] = paragraph;
                    }
                }
            }
        }
        result = this.sortEditedParagraphs(result);
        if (Object.keys(result).length > 0) {
            return JSON.stringify(result);
        } else {
            return null;
        }
    }

    getBookParagraphKeys(bookId) {
        let paragraphKeys = [];
        let keys = Object.keys(localStorage);
        let keyBookId = self.constants.data.book + '.' + bookId;
        for (let i = 0; i < keys.length; i++) {
            if (keys[i].startsWith(self.constants.data.book) && keys[i].indexOf('paragraph.') !== -1) {
                let bookIdInKey = keys[i].substring(0, keys[i].indexOf('.paragraph'));
                if (bookIdInKey === keyBookId) {
                    paragraphKeys.push(keys[i]);
                }
            }
        }
        return paragraphKeys;
    }

    sortEditedParagraphs(books) {
        let keys = Object.keys(books);
        let result = {};
        for (let i = 0; i < keys.length; i++) {
            let book = books[keys[i]];
            if (!!book.paragraphs && book.paragraphs.length > 0) {
                result[keys[i]] = book;
                book.paragraphs = this.sortParagraphs(book.paragraphs);
            }
        }
        return result;
    }

    sortParagraphs(paragraphs) {
        return paragraphs.sort(this.compareParagraph);
    }

    compareParagraph(p1, p2) {
        if (!p1 && !p2) {
            return 0;
        } else if (!p1) {
            return 1;
        } else if (!p2) {
            return -1;
        } else {
            return p1.paragraphNr - p2.paragraphNr;
        }
    }
}

export default PersistenceService;