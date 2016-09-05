let self;
class InGameController {
    /*@ngInject*/
    constructor(preScreenLoadingInterceptorsCallerService, $location, constants, endGamePopupService, $stateParams, gamePersistenceService, bookPersistenceService, $translate, messagesService) {
        self = this;
        preScreenLoadingInterceptorsCallerService.intercept();
        self.$location = $location;
        self.constants = constants;
        self.endGamePopupService = endGamePopupService;
        self.$stateParams = $stateParams;
        self.gamePersistenceService = gamePersistenceService;
        self.bookPersistenceService = bookPersistenceService;
        self.$translate = $translate;
        this.messagesService = messagesService;
        this.items = [];
        this.stats = [];

        self.game = self.gamePersistenceService.getGame(decodeURIComponent(self.$stateParams.gameId));
        this.playerName = self.game.playerName;
        if (!!self.game.items) {
            this.items = this.items.concat(self.game.items);
        }
        if (!!self.game.stats) {
            this.stats = this.stats.concat(self.game.stats);
        }
        self.bookId = self.$stateParams.bookId;
        this.paragraph = self.bookPersistenceService.getOrCreateParagraph(self.bookId, self.$stateParams.paragraphNr);
        self.popupAbandonGameConfig = { id : 'popupAbandonGame' };
        this.checkAvailableBook();
    }

    checkAvailableBook() {
        let book = this.bookPersistenceService.getBook(self.bookId);
        if (!book) {
            this.messagesService.errorMessage('The book is not available', false)
        }
    }

    startBattle() {
        self.$location.url(self.constants.url.battle + '/' + self.game.id);
    }

    displayAbandonGamePopup(removedRow) {
        self.endGamePopupService.show(self.popupAbandonGameConfig.id, self.callbackAbandonGamePopup);
    }

    callbackAbandonGamePopup(popupDomElementId, endGameReason) {
        let updatedGame = self.gamePersistenceService.getGame(self.game.id);
        updatedGame.endGameReason = endGameReason;
        self.gamePersistenceService.updateGame(updatedGame);
        self.$location.url(self.constants.url.games);
    }
}

export default InGameController;