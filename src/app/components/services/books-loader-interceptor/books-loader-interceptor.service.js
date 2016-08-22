let self;
class BooksLoaderInterceptorService {

    /*@ngInject*/
    constructor(persistenceService, booksService) {
        self = this;
        self.persistenceService = persistenceService;
        self.booksService = booksService;
    }

    loadBooks() {
        let books = self.booksService.getBooks();
        for (let i = 0; i < books.length; i++) {
            self.saveBookToPersistence(books[i]);
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
            for (let i = 0; i < book.paragraphs.length; i++) {
                self.persistenceService.setParagraph(book.id, book.paragraphs[i]);
            }
        }
    }
}

export default BooksLoaderInterceptorService;