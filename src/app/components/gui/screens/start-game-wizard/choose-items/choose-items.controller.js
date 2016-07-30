let self;
class ChooseItemsController {
    /*@ngInject*/
    constructor(preScreenLoadingInterceptorsCallerService, booksService, $stateParams, messagesService, $window, $location, constants) {
        self = this;
        preScreenLoadingInterceptorsCallerService.intercept();
        self.messagesService = messagesService;
        self.booksService = booksService;
        self.$window = $window;
        self.$stateParams = $stateParams;
        self.$location = $location;
        self.constants = constants;
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

    startGame() {
        let game = self.buildGame();
        // TODO save game with gamesService

        let urlOfGame = self.getUrlOfGame(game);
        self.$location.url(urlOfGame);
    }

    buildGame() {
        let timestamp = new Date().getTime();
        let game = {
            id : timestamp,
            playerName : self.$stateParams.playerName,
            bookName : self.book.urlName,
            items : self.playerItems,
            currentParagraphNr : self.book.startParagraphNr
        };
        game.stats = self.getStatsInUrlParam();
        return game;
    }

    getUrlOfGame(game) {
        // TODO get url with gamesService
        let nextUrl = self.constants.url.inGame + "/" + encodeURIComponent(game.bookName) + "/" + encodeURIComponent(game.currentParagraphNr) + "/" + "game=" + encodeURIComponent(game.id);
        return nextUrl;
    }

    getStatsInUrlParam() {
        let stats = [];
        let i;
        for (i = 0; i < self.book.stats.length; i++) {
            let currentStats = self.book.stats[i];
            stats.push({
                    name  : currentStats.name,
                    value : self.$stateParams[currentStats.name]
                });
        }
        return stats;
    }


    back() {
        self.$window.history.back();
    }
}

export default ChooseItemsController;