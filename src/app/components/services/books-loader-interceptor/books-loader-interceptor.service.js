let self;
class BooksLoaderInterceptorService {

    /*@ngInject*/
    constructor(persistenceService, booksService, constants) {
        self = this;
        self.persistenceService = persistenceService;
        self.booksService = booksService;
        if (constants.hasDataBreakingChange) {
            localStorage.clear();
        }
    }

    loadBooks() {
        let books = self.booksService.getBooks();
        for (let i = 0; i < books.length; i++) {
            self.saveBookToPersistence(books[i]);
        }
    }

    hasBreakingChange(book) {
        let previousSavedBook = self.persistenceService.getBook(book.id);
        if (!previousSavedBook || new Number(previousSavedBook.version) < new Number(book.version)) {
            return self.con
            self.persistenceService.setBook(book);
            self.saveParagraphsToPersistence(book);
        }
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