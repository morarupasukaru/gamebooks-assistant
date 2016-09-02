let ctrl;
class BookDetailController {
    /*@ngInject*/
    constructor(preScreenLoadingInterceptorsCallerService, persistenceService, bookPersistenceService, $stateParams, $location, constants) {
        preScreenLoadingInterceptorsCallerService.intercept();
        ctrl = this;
        this.persistenceService = persistenceService;
        this.bookPersistenceService = bookPersistenceService;
        this.$stateParams = $stateParams;
        this.$location = $location;
        this.constants = constants;
        this.initData();
    }

    initData() {
        let bookId = this.$stateParams.bookId;
        if (!!bookId) {
            if ("create" === bookId) {
                this.book = {};
            } else {
                this.book = this.bookPersistenceService.getBook(bookId);
            }
        }
    }

    save() {
        this.bookPersistenceService.updateBookWithoutParagraphs(this.book);
        this.$location.url(this.constants.url.books);
    }
}

export default BookDetailController;