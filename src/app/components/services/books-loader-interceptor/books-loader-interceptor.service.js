let self;
class BooksLoaderInterceptorService {

    /*@ngInject*/
    constructor(persistenceService, warlockOfFiretopMountainService) {
        self = this;
        self.persistenceService = persistenceService;
        self.warlockOfFiretopMountainService = warlockOfFiretopMountainService;
    }

    loadBooks() {
        self.saveBookToPersistence(self.warlockOfFiretopMountainService.getBook());
    }

    saveBookToPersistence(book) {
        let previousSavedBook = self.persistenceService.getBook(book.id);
        if (!previousSavedBook || new Number(previousSavedBook.version) < new Number(book.version)) {
            self.persistenceService.setBook(book);
            self.saveParagraphsToPersistence(book);
        }
    }

    saveParagraphsToPersistence(book) {
        if (!!book.paragraphs) {
            let i;
            for (i = 0; i < book.paragraphs.length; i++) {
                self.persistenceService.setParagraph(book.id, book.paragraphs[i]);
            }
        }
    }
}

export default BooksLoaderInterceptorService;