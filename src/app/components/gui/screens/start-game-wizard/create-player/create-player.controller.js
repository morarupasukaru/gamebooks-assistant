let self;
class CreatePlayerController {
    /*@ngInject*/
    constructor(preScreenLoadingInterceptorsCallerService, booksService, $stateParams, $window, $location, constants, dicesService) {
        self = this;
        preScreenLoadingInterceptorsCallerService.intercept();
        self.constants = constants;
        self.$window = $window;
        self.$location = $location;
        self.dicesService = dicesService;

        self.book = booksService.getBook($stateParams.bookName);
        this.loadData(self.book);
        this.generateStats();
    }

    loadData(book) {
        self.stats = [];
        let i;
        for (i = 0; i < book.stats.length; i++) {
            let currentStats = book.stats[i];
            self.stats.push({ name : currentStats.name,
                generate : function() {
                        return currentStats.init.constant + self.dicesService.rollDices(currentStats.init.sixDiceQuantity, 6);
                    }
                });
        }
    }

    generateStats() {
        let i;
        for (i = 0; i < self.stats.length; i++) {
            let stats = self.stats[i];
            stats.value = stats.generate();
        }
    }

    back() {
        self.$window.history.back();
    }

    next(invalid) {
        if (!!invalid) {
            return ;
        }

        let nextUrl = self.constants.url.chooseItemsForNewGame +
          "?bookName=" + encodeURIComponent(self.book.name) +
          "&playerName=" + encodeURIComponent(self.playerName);
        let i;
        for (i = 0; i < self.stats.length; i++) {
            let stats = self.stats[i];
            nextUrl = nextUrl + "&" + encodeURIComponent(stats.name) + "=" + encodeURIComponent(stats.value)
        }

        self.$location.url(nextUrl);
    }
}

export default CreatePlayerController;