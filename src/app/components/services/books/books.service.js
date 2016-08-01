let self;
class BooksService {

    /*@ngInject*/
    constructor(warlockOfFiretopMountainService, templeOfTerrorService, creatureFromHavocService, messagesService, $translate, constants, persistenceService) {
        self = this;
        self.messagesService = messagesService;
        self.$translate = $translate;
        self.constants = constants;
        self.persistenceService = persistenceService;
        self.books = [];
        self.addBook(warlockOfFiretopMountainService.getBook());
        self.addBook(templeOfTerrorService.getBook());
        self.addBook(creatureFromHavocService.getBook());
    }

    getBooks() {
        return self.books;
    }

    getParagraph(bookId, paragraphNr) {
        let book = self.getBook(bookId);
        if (!!book) {
            if (!!book.paragraphs) {
                let i;
                for (i = 0; i < book.paragraphs.length; i++) {
                    // use type coersion
                    if (paragraphNr == book.paragraphs[i].paragraphNr) {
                        return book.paragraphs[i];
                    }
                }
            }
            return self.createNewParagraph(paragraphNr);
        }
    }

    createNewParagraph(paragraphNr) {
        return {
            version : self.constants.version,
            paragraphNr : paragraphNr,
            description : '',
            choices : []
        };
    }

    getBook(bookId) {
        let i;
        for (i = 0; i < self.books.length; i++) {
            if (bookId === self.books[i].id) {
                return self.books[i];
            }
        }
        self.messagesService.errorMessage(self.$translate.instant('Cannot find book') + " '"  + bookId + "'", false);
        return null;
    }

    addBook(book) {
        self.books.push(book);
        self.saveBookToPersistence(book);
    }

    saveBookToPersistence(book) {
        let previousSavedBook = self.persistenceService.getBook(book.id);
        if (!previousSavedBook || new Number(previousSavedBook.version) < new Number(book.version)) {
            self.persistenceService.setBook(book);
            // TODO replace paragraph
        }
    }
}

export default BooksService;