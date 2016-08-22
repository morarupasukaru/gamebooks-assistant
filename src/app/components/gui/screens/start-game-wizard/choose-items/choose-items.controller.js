let self;
class ChooseItemsController {
    /*@ngInject*/
    constructor(preScreenLoadingInterceptorsCallerService, $stateParams, messagesService, $window, $location, constants, persistenceService, $translate) {
        self = this;
        preScreenLoadingInterceptorsCallerService.intercept();
        self.messagesService = messagesService;
        self.persistenceService = persistenceService;
        self.$window = $window;
        self.$stateParams = $stateParams;
        self.$location = $location;
        self.$translate = $translate;
        self.constants = constants;

        self.book = persistenceService.getBook($stateParams.bookId);
        self.playerItems = self.book.items;
        for (let i = 0; i < self.playerItems.length; i++) {
            self.playerItems[i].description = $translate.instant(self.playerItems[i].description);
        }
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
        self.persistenceService.setCurrentParagraphNrOfGame(game.id, null, self.book.startParagraphNr);
        self.$location.url(self.persistenceService.getUrlOfGame(game.id));
    }

    buildGame() {
        let game = {
            playerName : self.$stateParams.playerName,
            bookId : self.book.id,
            items : JSON.parse(JSON.stringify(self.playerItems))
        };
        game.stats = self.getStatsInUrlParam();
        return game;
    }

    getStatsInUrlParam() {
        let statsParamValue = self.$stateParams['stats'];
        let stats = [];
        for (let i = 0; i < self.book.stats.length; i++) {
            let currentStats = self.book.stats[i];
            let startPos = statsParamValue.indexOf(currentStats.name);
            startPos = startPos + currentStats.name.length;
            let endPos = statsParamValue.indexOf(',', startPos);
            let statsValue = statsParamValue.substring(startPos, endPos);
            stats.push({
                    name  : currentStats.name,
                    value : new Number(statsValue)
                });
        }
        return stats;
    }


    back() {
        self.$window.history.back();
    }
}

export default ChooseItemsController;