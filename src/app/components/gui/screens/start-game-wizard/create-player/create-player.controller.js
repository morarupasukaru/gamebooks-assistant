let self;
class CreatePlayerController {
    /*@ngInject*/
    constructor(preScreenLoadingInterceptorsCallerService, booksService, $stateParams, $window, $location, constants) {
        self = this;
        preScreenLoadingInterceptorsCallerService.intercept();
        self.constants = constants;
        self.$window = $window;
        self.$location = $location;

        let book = booksService.getBook($stateParams.bookName);
        this.loadData(book);
    }

    loadData(book) {
        self.stats = book.stats;
    }

    back() {
        self.$window.history.back();
    }

    next(invalid) {
        if (!!invalid) {
            return ;
        }

        self.$location.url(self.constants.url.displayStartParagraphForNewGame +
            "?bookName=" + encodeURIComponent(self.selectedBookName) +
            "&playerName=" + encodeURIComponent(self.playerName));
    }
}

export default CreatePlayerController;