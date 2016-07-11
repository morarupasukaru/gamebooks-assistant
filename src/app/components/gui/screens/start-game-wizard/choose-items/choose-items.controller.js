let self;
class ChooseItemsController {
    /*@ngInject*/
    constructor(preScreenLoadingInterceptorsCallerService, booksService, $stateParams   ) {
        self = this;
        preScreenLoadingInterceptorsCallerService.intercept();
        self.booksService = booksService;
        self.book = booksService.getBook($stateParams.bookName);
    }

    isItemsDisplayed() {
        return !!self.book.items && self.book.items.length > 0;
    }

    isNotesDisplayed() {
        return !!self.book.notes && self.book.notes.length > 0;
    }

    getNotes() {
        return self.book.notes.join(',');
    }
}

export default ChooseItemsController;