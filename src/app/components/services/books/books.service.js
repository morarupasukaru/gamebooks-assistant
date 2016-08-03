let self;
class BooksService {

    /*@ngInject*/
    constructor(warlockOfFiretopMountainService, templeOfTerrorService, creatureFromHavocService, messagesService, $translate, constants, persistenceService) {
        self = this;
        // TODO as interceptor BooksLoaderInterceptor
        self.messagesService = messagesService;
        self.$translate = $translate;
        self.constants = constants;
        self.persistenceService = persistenceService;
        self.saveBookToPersistence(warlockOfFiretopMountainService.getBook());
        self.saveBookToPersistence(templeOfTerrorService.getBook());
        self.saveBookToPersistence(creatureFromHavocService.getBook());
    }

    getParagraph(bookId, paragraphNr) {
        // TODO
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

    saveBookToPersistence(book) {
        let previousSavedBook = self.persistenceService.getBook(book.id);
        if (!previousSavedBook || new Number(previousSavedBook.version) < new Number(book.version)) {
            self.persistenceService.setBook(book);
            self.saveParagraphsToPersistence(book);
        }
    }

    saveParagraphsToPersistence(book) {
        let i;
        for (i = 0; i < book.paragraphs.length; i++) {
            self.persistenceService.setParagraph(book.id, book.paragraphs[i]);
        }
    }
}

export default BooksService;