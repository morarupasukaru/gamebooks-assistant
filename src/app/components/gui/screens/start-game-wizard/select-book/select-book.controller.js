let self;
class SelectBookController {
    /*@ngInject*/
    constructor(preScreenLoadingInterceptorsCallerService, constants, $location, $window, persistenceService) {
        self = this;
        preScreenLoadingInterceptorsCallerService.intercept();
        this.$location = $location;
        this.$window = $window;
        this.constants = constants;
        this.persistenceService = persistenceService;
        this.initData();
    }

    initData() {
        let bookPersistenceKeys = self.persistenceService.getBookPersistenceKeys();
        let i;

        self.books = [];
        for (i = 0; i < bookPersistenceKeys.length; i++) {
            let book = self.persistenceService.getBook(bookPersistenceKeys[i]);
            self.books.push(book);
        }
        self.selectedBookName = self.books[0].name;
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