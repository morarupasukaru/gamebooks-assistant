let self;
class ChooseItemsController {
    /*@ngInject*/
    constructor(preScreenLoadingInterceptorsCallerService, booksService, $stateParams   ) {
        self = this;
        preScreenLoadingInterceptorsCallerService.intercept();
        self.booksService = booksService;
        self.book = booksService.getBook($stateParams.bookName);
        self.playerItems = JSON.parse(JSON.stringify(self.book.items));
    }

    isItemsDisplayed() {
        return !!self.book.items && self.book.items.length > 0;
    }

    isNotesDisplayed() {
        return !!self.book.notes && self.book.notes.length > 0;
    }

    getItems() {
        return self.playerItems;
    }

    getNotes() {
        return self.book.notes;
    }
}

export default ChooseItemsController;