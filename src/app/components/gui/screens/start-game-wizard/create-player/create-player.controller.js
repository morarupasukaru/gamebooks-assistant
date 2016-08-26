let self;
class CreatePlayerController {
    /*@ngInject*/
    constructor(preScreenLoadingInterceptorsCallerService, $stateParams, $window, $location, constants, dicesService, bookPersistenceService) {
        self = this;
        preScreenLoadingInterceptorsCallerService.intercept();
        self.constants = constants;
        self.$window = $window;
        self.$location = $location;
        self.dicesService = dicesService;

        self.book = bookPersistenceService.getBook($stateParams.bookId);
        this.loadData(self.book);
        this.generateStats();
    }

    loadData(book) {
        self.stats = [];
        for (let i = 0; i < book.stats.length; i++) {
            let currentStats = book.stats[i];
            self.stats.push({ name : currentStats.name,
                generate : function() {
                        return currentStats.init.constant + self.dicesService.rollDices(currentStats.init.sixDiceQuantity, 6);
                    }
                });
        }
    }

    generateStats() {
        for (let i = 0; i < self.stats.length; i++) {
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
          "?bookId=" + encodeURIComponent(self.book.id) +
          "&playerName=" + encodeURIComponent(self.playerName);

        let statsParam = '';

        for (let i = 0; i < self.stats.length; i++) {
            let stats = self.stats[i];
            statsParam = statsParam + encodeURIComponent(stats.name) + encodeURIComponent(stats.value) + ',';
        }

        nextUrl = nextUrl + "&stats=" + statsParam;
        self.$location.url(nextUrl);
    }
}

export default CreatePlayerController;