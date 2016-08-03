let self;
class ChooseItemsController {
    /*@ngInject*/
    constructor(preScreenLoadingInterceptorsCallerService, $stateParams, messagesService, $window, $location, constants, persistenceService) {
        self = this;
        preScreenLoadingInterceptorsCallerService.intercept();
        self.messagesService = messagesService;
        self.persistenceService = persistenceService;
        self.$window = $window;
        self.$stateParams = $stateParams;
        self.$location = $location;
        self.constants = constants;
        self.book = persistenceService.getBook($stateParams.bookId);
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
        game = self.persistenceService.addGame(game);
        self.$location.url(self.persistenceService.getUrlOfGame(game.id));
    }

    buildGame() {
        let timestamp = new Date().getTime();
        let game = {
            playerName : self.$stateParams.playerName,
            bookId : self.book.id,
            items : self.playerItems,
            currentParagraphNr : self.book.startParagraphNr
        };
        game.stats = self.getStatsInUrlParam();
        return game;
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