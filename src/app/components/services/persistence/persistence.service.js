let self;
class PersistenceService {

    /*@ngInject*/
    constructor(softwareRequirementsCheckerService, constants, messagesService) {
        self = this;
        self.isLocalStorageSupported = softwareRequirementsCheckerService.isLocalStorageSupported();
        self.constants = constants;
        self.messagesService = messagesService;
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
        return self.findKeysWithPrefix(self.constants.data.book);
    }

    findKeysWithPrefix(keyPrefix) {
        if (!self.isLocalStorageSupported) {
            return null;
        }
        let keys = Object.keys(localStorage);
        let result = [];
        let i;
        for (i = 0; i < keys.length; i++) {
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
        let i;
        for (i = 0; i < keys.length; i++) {
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
            return {
                version : self.constants.version,
                paragraphNr : paragraphNr,
                description : '',
                choices : []
            };
        }
    }

    getParagraph(bookId, paragraphNr) {
        let key = self.getParagraphPersistenceKey(bookId, paragraphNr);
        return self.get(key);
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
        let i;
        for (i = 0; i < game.stats.length;i++) {
            savedGame.stats.push({ name: game.stats[i].name, initial: game.stats[i].value, current: game.stats[i].value});
        }

        self.updateGame(savedGame);
        return savedGame;
    }

    updateGame(game) {
        let key = self.getGamePersistenceKey(game.id);
        self.save(key, game);
    }

    newId() {
        return new Date().getTime().toString();
    }

    getUrlOfGame(gameId, paragraphNr) {
        let game = self.getGame(gameId);
        if (!paragraphNr) {
            paragraphNr = game.currentParagraphNr;
        }
        let urlOfGame = "/" + encodeURIComponent(game.bookId) + "/" + encodeURIComponent(paragraphNr) + "?" + "game=" + encodeURIComponent(game.id);
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
        let i;
        for (i = 0; i < keys.length; i++) {
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
        return JSON.parse(JSON.stringify(localStorage));

    }
}

export default PersistenceService;