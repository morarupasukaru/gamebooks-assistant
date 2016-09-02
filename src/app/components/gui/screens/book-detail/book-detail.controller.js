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
        if (!!this.book.items) {
            let modifiedItems = [];
            for (let i = 0; i < this.book.items.length; i++) {
                modifiedItems.push({
                    quantity: this.book.items[i].quantity,
                    description: this.book.items[i].description
                });
            }
            this.book.items = modifiedItems;
        }
        this.bookPersistenceService.updateBookWithoutParagraphs(this.book);
        this.$location.url(this.constants.url.books);
    }
}

export default BookDetailController;