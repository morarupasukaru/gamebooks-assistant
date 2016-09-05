class BookPersistenceService {

    /*@ngInject*/
    constructor(constants, persistenceService, messagesService, $translate) {
        this.constants = constants;
        this.persistenceService = persistenceService;
        this.messagesService = messagesService;
        this.$translate = $translate;
    }

    getBooksOverview() {
        let keys = this.getBookPersistenceKeys();
        let books = [];
        for (let i = 0; i < keys.length; i++) {
            let book = this.persistenceService.get(keys[i]);
            books.push({
                id: book.id,
                name : book.name,
                numberOfParagraphs : book.numberOfParagraphs,
                language : book.language,
                version : book.version,
                authors : book.authors
            });
        }
        return books;
    }

    getBookPersistenceKeys() {
        let keys = Object.keys(localStorage);
        let result = [];
        for (let i = 0; i < keys.length; i++) {
            if (keys[i].startsWith(this.constants.data.adventure) && keys[i].indexOf('paragraph.') === -1) {
                result.push(keys[i]);
            }
        }
        return result;
    }

    getBook(bookId) {
        return this.persistenceService.get(this.getBookPersistenceKey(bookId));
    }

    updateBookWithoutParagraphs(book) {
        let bookIdFromFromBookName = this.getBookIdFromBookName(book.name);
        if (!book.id) {
            book.id = bookIdFromFromBookName;
            let existingBook = this.getBook(bookIdFromFromBookName);
            if (!!existingBook) {
                throw this.constants.errors.adventureAlreadyExist;
            }
        }
        let bookInfo = {};
        let keys = Object.keys(book);
        for (let i = 0; i < keys.length; i++) {
            if (keys[i] !== 'paragraphs') {
                bookInfo[keys[i]] = book[keys[i]];
            }
        }
        this.persistenceService.save(this.constants.data.adventure + "." + book.id, bookInfo);
    }

    getBookIdFromBookName(bookName) {
        return encodeURIComponent(bookName.replace(/\s+/g, '-').toLowerCase());
    }

    deleteBookAndParagraphs(bookId) {
        this.persistenceService.remove(this.getBookPersistenceKey(bookId));
        let paragraphKeys = this.getBookParagraphKeys(bookId);
        for (let i = 0; i < paragraphKeys.length; i++) {
            this.persistenceService.remove(paragraphKeys[i]);
        }
    }

    deleteBookAndParagraphs(bookId) {
        this.persistenceService.remove(this.getBookPersistenceKey(bookId));
        let paragraphKeys = this.getBookParagraphKeys(bookId);
        for (let i = 0; i < paragraphKeys.length; i++) {
            this.persistenceService.remove(paragraphKeys[i]);
        }
    }

    setParagraph(bookId, paragraph, checkDupplicate) {
        let key = this.getParagraphPersistenceKey(bookId, paragraph.paragraphNr);
        if (!!checkDupplicate) {
            let existingParagraph = this.persistenceService.get(key);
            if (!!existingParagraph) {
                this.messagesService.errorMessage(this.$translate.instant("DupplicateParagraph", {paragraphNr: paragraph.paragraphNr }), true);
                return ;
            }
        }
        this.checkDupplicateChoices(paragraph);
        this.persistenceService.save(key, paragraph);
    }

    getOrCreateParagraph(bookId, paragraphNr) {
        let foundParagraph = this.getParagraph(bookId, paragraphNr);
        if (!!foundParagraph) {
            return foundParagraph;
        } else {
            let paragraph = {
                version : this.constants.version,
                bookId : bookId,
                paragraphNr : new Number(paragraphNr),
                description : '',
                choices : []
            };
            this.updateParagraph(bookId, paragraph);
            return paragraph;
        }
    }

    getParagraph(bookId, paragraphNr) {
        let key = this.getParagraphPersistenceKey(bookId, paragraphNr);
        return this.persistenceService.get(key);
    }

    updateParagraph(bookId, paragraph) {
        if (!paragraph) {
            return ;
        }
        paragraph = JSON.parse(JSON.stringify(paragraph));
        let key = this.getParagraphPersistenceKey(bookId, paragraph.paragraphNr);
        if (!!paragraph.choices) {
            for (let i = 0; i < paragraph.choices.length; i++) {
                delete paragraph.choices[i]['$$hashKey'];
            }
        }
        this.checkDupplicateChoices(paragraph);
        this.persistenceService.save(key, paragraph);
    }

    checkDupplicateChoices(paragraph) {
        if (!!paragraph && !!paragraph.choices) {
            let choices = [];
            for (let i = 0; i < paragraph.choices.length; i++) {
                if (choices.indexOf(paragraph.choices[i].paragraphNr) !== -1) {
                    this.messagesService.errorMessage(this.$translate.instant("DupplicateParagraphChoices", {paragraphNr: paragraph.paragraphNr, choiceParagraphNr : paragraph.choices[i].paragraphNr }), true);
                }
                choices.push(paragraph.choices[i].paragraphNr);
            }
        }
    }

    getBookParagraphKeys(bookId) {
        let paragraphKeys = [];
        let keys = Object.keys(localStorage);
        let keyBookId = this.constants.data.adventure + '.' + bookId;
        for (let i = 0; i < keys.length; i++) {
            if (keys[i].startsWith(this.constants.data.adventure) && keys[i].indexOf('paragraph.') !== -1) {
                let bookIdInKey = keys[i].substring(0, keys[i].indexOf('.paragraph'));
                if (bookIdInKey === keyBookId) {
                    paragraphKeys.push(keys[i]);
                }
            }
        }
        return paragraphKeys;
    }

    getParagraphPersistenceKey(bookId, paragraphNr) {
        return this.getBookPersistenceKey(bookId) + ".paragraph." + paragraphNr;
    }

    getBookPersistenceKey(bookId) {
        let key = bookId;
        if (!key.startsWith(this.constants.data.adventure)) {
            key = this.constants.data.adventure + "." + key;
        }
        return key;
    }

    export() {
        let bookKeys = this.getBookPersistenceKeys();
        let books = [];
        for (let i = 0; i < bookKeys.length; i++) {
            let book = this.persistenceService.get(bookKeys[i]);
            books.push(this.exportBook(book.id));
        }
        return JSON.stringify(books);

    }

    exportBook(bookId) {
        let book = this.getBook(bookId);
        book.paragraphs = [];

        let keys = Object.keys(localStorage);
        let bookIdKeyPrefix = this.constants.data.adventure + '.' + bookId;
        for (let i = 0; i < keys.length; i++) {
            if (keys[i].startsWith(bookIdKeyPrefix + ".paragraph") !== -1) {
                let currentBookIdPrefix = keys[i].substring(0, keys[i].indexOf('.paragraph'));
                if (currentBookIdPrefix === bookIdKeyPrefix) {
                    let paragraph = this.persistenceService.get(keys[i]);
                    if (!!paragraph) {
                        book.paragraphs.push(paragraph);
                    }
                }
            }
        }
        book.paragraphs = this.sortParagraphs(book.paragraphs);
        return book;
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

export default BookPersistenceService;