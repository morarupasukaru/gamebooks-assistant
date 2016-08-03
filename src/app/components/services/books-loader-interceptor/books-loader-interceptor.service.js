let self;
class BooksLoaderInterceptorService {

    /*@ngInject*/
    constructor(persistenceService, warlockOfFiretopMountainService, templeOfTerrorService, creatureFromHavocService) {
        self = this;
        self.persistenceService = persistenceService;
        self.warlockOfFiretopMountainService = warlockOfFiretopMountainService;
        self.templeOfTerrorService = templeOfTerrorService;
        self.creatureFromHavocService = creatureFromHavocService;
    }

    loadBooks() {
        self.saveBookToPersistence(self.warlockOfFiretopMountainService.getBook());
        self.saveBookToPersistence(self.templeOfTerrorService.getBook());
        self.saveBookToPersistence(self.creatureFromHavocService.getBook());
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