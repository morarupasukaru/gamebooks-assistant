let self;
class SelectBookController {
    /*@ngInject*/
    constructor(preScreenLoadingInterceptorsCallerService, constants, $location, $window, bookPersistenceService) {
        self = this;
        preScreenLoadingInterceptorsCallerService.intercept();
        this.$location = $location;
        this.$window = $window;
        this.constants = constants;
        this.bookPersistenceService = bookPersistenceService;
        this.initData();
    }

    initData() {
        let bookPersistenceKeys = self.bookPersistenceService.getBookPersistenceKeys();
        self.books = [];
        for (let i = 0; i < bookPersistenceKeys.length; i++) {
            let book = self.bookPersistenceService.getBook(bookPersistenceKeys[i]);
            self.books.push(book);
        }
        self.selectedBookId = self.books[0].id;
    }

    getBooks() {
        return self.books;
    }

    back() {
        self.$window.history.back();
    }

    next() {
        self.$location.url(self.constants.url.createPlayerForNewGame + "?bookId=" + encodeURIComponent(self.selectedBookId));
    }
}

export default SelectBookController;