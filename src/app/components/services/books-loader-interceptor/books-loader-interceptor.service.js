class BooksLoaderInterceptorService {

    /*@ngInject*/
    constructor(bookPersistenceService, booksService) {
        this.bookPersistenceService = bookPersistenceService;
        this.booksService = booksService;
    }

    loadBooks() {
        let books = this.booksService.getBooks();
        for (let i = 0; i < books.length; i++) {
            this.saveBookToPersistence(books[i]);
        }
    }

    saveBookToPersistence(book) {
        let previousSavedBook = this.bookPersistenceService.getBook(book.id);
        if (!previousSavedBook || new Number(previousSavedBook.version) < new Number(book.version)) {
            this.bookPersistenceService.deleteBookAndParagraphs(book.id);
            this.bookPersistenceService.updateBookWithoutParagraphs(book);
            this.saveParagraphsToPersistence(book);
        }
    }

    saveParagraphsToPersistence(book) {
        if (!!book.paragraphs) {
            for (let i = 0; i < book.paragraphs.length; i++) {
                this.bookPersistenceService.setParagraph(book.id, book.paragraphs[i], true);
            }
        }
    }
}

export default BooksLoaderInterceptorService;