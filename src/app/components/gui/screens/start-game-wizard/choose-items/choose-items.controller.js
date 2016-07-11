let self;
class ChooseItemsController {
    /*@ngInject*/
    constructor(preScreenLoadingInterceptorsCallerService, booksService, $stateParams, messagesService, $window) {
        self = this;
        preScreenLoadingInterceptorsCallerService.intercept();
        self.messagesService = messagesService;
        self.booksService = booksService;
        self.$window = $window;
        self.book = booksService.getBook($stateParams.bookName);
        self.playerItems = JSON.parse(JSON.stringify(self.book.items));
        this.displayNotes();
    }

    isItemsDisplayed() {
        return !!self.book.items && self.book.items.length > 0;
    }

    displayNotes() {
        if (!!self.book.notes) {
            self.book.notes.forEach(function(entry) {
                self.messagesService.infoMessage(entry.note, false);
            });
        }
    }

    getItems() {
        return self.playerItems;
    }

    back() {
        self.$window.history.back();
    }
}

export default ChooseItemsController;