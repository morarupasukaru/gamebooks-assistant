let self;
class SelectBookController {
    /*@ngInject*/
    constructor(preScreenLoadingInterceptorsCallerService, constants, booksService, $location, $window, persistenceService) {
        self = this;
        preScreenLoadingInterceptorsCallerService.intercept();
        this.$location = $location;
        this.$window = $window;
        this.constants = constants;
        this.persistenceService = persistenceService;
        let booksPersistenceKey = persistenceService.getBookPersistenceKeys();
        debugger;
        this.books = booksService.getBooks();
        this.selectedBookName = this.books[0].name;
    }

    getBooks() {
        return self.books;
    }

    back() {
        self.$window.history.back();
    }

    next() {
        self.$location.url(self.constants.url.createPlayerForNewGame + "?bookName=" + encodeURIComponent(self.selectedBookName));
    }
}

export default SelectBookController;