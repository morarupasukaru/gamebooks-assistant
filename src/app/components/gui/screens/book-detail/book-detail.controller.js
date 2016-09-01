let ctrl;
class BookDetailController {
    /*@ngInject*/
    constructor(preScreenLoadingInterceptorsCallerService, persistenceService, bookPersistenceService, $stateParams) {
        preScreenLoadingInterceptorsCallerService.intercept();
        ctrl = this;
        this.persistenceService = persistenceService;
        this.bookPersistenceService = bookPersistenceService;
        this.$stateParams = $stateParams;
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
}

export default BookDetailController;