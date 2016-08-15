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
        let i;
        for (i = 0; i < keys.length; i++) {
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
            let paragraph = {
                version : self.constants.version,
                bookId : bookId,
                paragraphNr : new Number(paragraphNr),
                description : '',
                choices : []
            };
            self.updateParagraph(paragraph);
            return paragraph;
        }
    }

    getParagraph(bookId, paragraphNr) {
        let key = self.getParagraphPersistenceKey(bookId, paragraphNr);
        return self.get(key);
    }

    updateParagraph(paragraph) {
        if (!paragraph) {
            return ;
        }
        paragraph = JSON.parse(JSON.stringify(paragraph));
        let key = self.getParagraphPersistenceKey(paragraph.bookId, paragraph.paragraphNr);
        if (!!paragraph.choices) {
            let i;
            for (i = 0; i < paragraph.choices.length; i++) {
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
        let i;
        for (i = 0; i < game.stats.length;i++) {
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
            let i;
            for (i = 0; i < game.items.length; i++) {
                delete game.items[i]['$$hashKey'];
            }
        }
        self.save(key, game);
    }

    newId() {
        return new Date().getTime().toString();
    }

    setCurrentParagraphNrOfGame(gameId, fromParagrahNr, toParagraphNr) {
        let game = this.getGame(gameId);
        if (!!fromParagrahNr) {
            let paragraph = this.getParagraph(game.bookId, fromParagrahNr);
            let choice;
            for (choice of paragraph.choices) {
                if (choice.paragraphNr === toParagraphNr) {
                    choice.alreadyChoosen = true;
                    break ;
                }
            }
            this.updateParagraph(paragraph);
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
        this.getEditedParagraphs();
        return localStorage;

    }

    getEditedParagraphs() {
        if (!self.isLocalStorageSupported) {
            return null;
        }
        let keys = Object.keys(localStorage);
        let result = {};
        let mapEditedParagraph = [];
        let i;
        for (i = 0; i < keys.length; i++) {
            if (keys[i].startsWith(self.constants.data.book) && keys[i].indexOf('paragraph.') !== -1) {
                let bookId = keys[i].substring(0, keys[i].indexOf('.paragraph'));
                let paragraph = self.get(keys[i]);
                if (!mapEditedParagraph[paragraph.paragraphNr]) {
                    if  (self.isEdited(paragraph)) {
                        if (!result[bookId]) {
                            result[bookId] = { paragraphs : [] };
                        }
                        let editedParagraphData = self.getEditedParagraphData(paragraph);
                        if (!!editedParagraphData) {
                            result[bookId].paragraphs.push(editedParagraphData);
                            mapEditedParagraph[editedParagraphData.paragraphNr] = editedParagraphData;
                        }
                    }
                }
            }
        }
        result = this.sortEditedParagraphs(result);
        if (Object.keys(result).length > 0) {
            return JSON.stringify(result)
                .replace(/"paragraphNr":/g, 'paragraphNr:')
                .replace(/"description":/g, 'description:')
                .replace(/"paragraphs":/g, 'paragraphs:')
                .replace(/"choices":/g, 'choices:')
                .replace(/"deletedChoices":/g, 'deletedChoices:')
                .replace(/"notes":/g, 'notes:')
                .replace(/"note":/g, 'note:')
                .replace(/"added":/g, 'added:')
                .replace(/"removed":/g, 'removed:')
                .replace(/"choices":/g, 'choices:')
                .replace(/"playerName":/g, 'playerName:')
                .replace(/"lastEditedBy":/g, 'lastEditedBy:');
        } else {
            return null;
        }
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

    isEdited(paragraph) {
        return !!paragraph && !!paragraph.lastEditedBy;
    }

    getEditedParagraphData(paragraph) {
        let originalParagraph = this.booksService.getParagraph(paragraph.bookId, paragraph.paragraphNr);

        this.removeUneditableParagraphData(paragraph);
        this.removeUnmodifiedParagraphData(paragraph, originalParagraph);
        if (this.hasModifiedParagraphData(paragraph)) {
            return paragraph;
        } else {
            return null;
        }
    }

    removeUneditableParagraphData(paragraph) {
        delete paragraph.bookId;
        delete paragraph.version;
        for (let j = 0; j < paragraph.choices.length; j++) {
            delete paragraph.choices[j].alreadyChoosen;
        }
    }

    removeUnmodifiedParagraphData(paragraph, originalParagraph) {
        if (!!originalParagraph) {
            if (paragraph.description === originalParagraph.description) {
                delete paragraph.description;
            }

            if (!!paragraph.choices) {
                let deletedChoices = [];
                for (let i = 0; i < originalParagraph.choices.length; i++) {
                    let found = false;
                    for (let j = 0; j < paragraph.choices.length; j++) {
                        if (originalParagraph.choices[i].paragraphNr == paragraph.choices[j].paragraphNr) {
                            found = true;
                            break;
                        }
                    }
                    if (!found) {
                        deletedChoices.push(originalParagraph.choices[i].paragraphNr)
                    }
                }
                if (deletedChoices.length > 0) {
                    paragraph.deletedChoices = deletedChoices;
                }

                let choicesToDelete = [];
                for (let i = 0; i < paragraph.choices.length; i++) {
                    for (let j = 0; j < originalParagraph.choices.length; j++) {
                        if (originalParagraph.choices[j].paragraphNr == paragraph.choices[i].paragraphNr &&
                                originalParagraph.choices[j].description === paragraph.choices[i].description) {
                            choicesToDelete.push(paragraph.choices[i]);
                        }
                    }
                }
                this.removeAll(paragraph.choices, choicesToDelete);
                if (paragraph.choices.length === 0) {
                    delete paragraph.choices;
                }
            }

            if (!!paragraph.notes) {
                let currentNotes = paragraph.notes;
                delete paragraph.notes;

                let deletedNotes = [];
                if (!!originalParagraph.notes) {
                    for (let i = 0; i < originalParagraph.notes.length; i++) {
                        let found = false;
                        for (let j = 0; j < currentNotes.length; j++) {
                            if (originalParagraph.notes[i].note == currentNotes[j].note) {
                                found = true;
                                break;
                            }
                        }
                        if (!found) {
                            deletedNotes.push(originalParagraph.notes[i].note)
                        }
                    }

                    let addedNotes = [];
                    for (let i = 0; i < currentNotes.length; i++) {
                        let found = false;
                        for (let j = 0; j < originalParagraph.notes.length; j++) {
                            if (originalParagraph.notes[j].note == currentNotes[i].note) {
                                found = true;
                                break;
                            }
                        }
                        if (!found) {
                            addedNotes.push(currentNotes[i].note)
                        }
                    }

                    if (deletedNotes.length > 0 || addedNotes.length > 0) {
                        paragraph.notes = {};
                        if (addedNotes.length > 0) {
                            paragraph.notes.added = addedNotes;
                        }
                        if (deletedNotes.length > 0) {
                            paragraph.notes.removed = deletedNotes;
                        }
                    }

                } else if (!!currentNotes && currentNotes.length > 0) {
                    paragraph.notes = { added : currentNotes };
                }
            }
        }
    }

    hasModifiedParagraphData(paragraph) {
        let keys = Object.keys(paragraph);
        this.remove(keys, 'paragraphNr');
        this.remove(keys, 'lastEditedBy');
        return keys.length > 0;
    }

    removeAll(array, valuesToRemove) {
        for (let i = 0; i < valuesToRemove.length; i++) {
            this.remove(array, valuesToRemove[i]);
        }
    }

    remove(array, valueToRemove) {
        array.splice(array.indexOf(valueToRemove), 1);
    }
}

export default PersistenceService;