let self;
class BookPersistenceService {

    /*@ngInject*/
    constructor(constants, persistenceService, messagesService, $translate) {
        self = this;
        self.constants = constants;
        self.persistenceService = persistenceService;
        self.messagesService = messagesService;
        self.$translate = $translate;
    }

    getBooksOverview() {
        let keys = self.getBookPersistenceKeys();
        let books = [];
        for (let i = 0; i < keys.length; i++) {
            let book = self.persistenceService.get(keys[i]);
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
            if (keys[i].startsWith(self.constants.data.book) && keys[i].indexOf('paragraph.') === -1) {
                result.push(keys[i]);
            }
        }
        return result;
    }

    getBook(bookId) {
        return self.persistenceService.get(self.getBookPersistenceKey(bookId));
    }

    updateBookWithoutParagraphs(book) {
        if (!book.id) {
            book.id = this.getBookIdFromBookName(book.name);
        }
        let bookInfo = {};
        let keys = Object.keys(book);
        for (let i = 0; i < keys.length; i++) {
            if (keys[i] !== 'paragraphs') {
                bookInfo[keys[i]] = book[keys[i]];
            }
        }
        self.persistenceService.save(self.constants.data.book + "." + book.id, bookInfo);
    }

    getBookIdFromBookName(bookName) {
        return encodeURIComponent(bookName.replace(/\s+/g, '-').toLowerCase());
    }

    deleteBook(bookId) {
        self.persistenceService.remove(self.getBookPersistenceKey(bookId));
        let paragraphKeys = self.getBookParagraphKeys(bookId);
        for (let i = 0; i < paragraphKeys.length; i++) {
            self.persistenceService.remove(paragraphKeys[i]);
        }
    }

    setParagraph(bookId, paragraph, checkDupplicate) {
        let key = self.getParagraphPersistenceKey(bookId, paragraph.paragraphNr);
        if (!!checkDupplicate) {
            let existingParagraph = self.persistenceService.get(key);
            if (!!existingParagraph) {
                self.messagesService.errorMessage(self.$translate.instant("DupplicateParagraph", {paragraphNr: paragraph.paragraphNr }), true);
                return ;
            }
        }
        self.checkDupplicateChoices(paragraph);
        self.persistenceService.save(key, paragraph);
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
        return self.persistenceService.get(key);
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
        self.checkDupplicateChoices(paragraph);
        self.persistenceService.save(key, paragraph);
    }

    checkDupplicateChoices(paragraph) {
        if (!!paragraph && !!paragraph.choices) {
            let choices = [];
            for (let i = 0; i < paragraph.choices.length; i++) {
                if (choices.indexOf(paragraph.choices[i].paragraphNr) !== -1) {
                    self.messagesService.errorMessage(self.$translate.instant("DupplicateParagraphChoices", {paragraphNr: paragraph.paragraphNr, choiceParagraphNr : paragraph.choices[i].paragraphNr }), true);
                }
                choices.push(paragraph.choices[i].paragraphNr);
            }
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

    export() {
        let bookKeys = self.getBookPersistenceKeys();
        let books = [];
        for (let i = 0; i < bookKeys.length; i++) {
            let book = self.persistenceService.get(bookKeys[i]);
            books.push(self.exportBook(book.id));
        }
        return JSON.stringify(books);

    }

    exportBook(bookId) {
        let book = self.getBook(bookId);
        book.paragraphs = [];

        let keys = Object.keys(localStorage);
        let bookIdKeyPrefix = self.constants.data.book + '.' + bookId;
        for (let i = 0; i < keys.length; i++) {
            if (keys[i].startsWith(bookIdKeyPrefix + ".paragraph") !== -1) {
                let currentBookIdPrefix = keys[i].substring(0, keys[i].indexOf('.paragraph'));
                if (currentBookIdPrefix === bookIdKeyPrefix) {
                    let paragraph = self.persistenceService.get(keys[i]);
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