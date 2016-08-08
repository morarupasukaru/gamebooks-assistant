let self;
class InGameController {
    /*@ngInject*/
    constructor(preScreenLoadingInterceptorsCallerService, $location, constants, endGamePopupService, $stateParams, persistenceService, $translate) {
        self = this;
        preScreenLoadingInterceptorsCallerService.intercept();
        self.$location = $location;
        self.constants = constants;
        self.endGamePopupService = endGamePopupService;
        self.$stateParams = $stateParams;
        self.persistenceService = persistenceService;
        self.$translate = $translate;
        if (!!$stateParams.game) {
            self.game = self.persistenceService.getGame(decodeURIComponent($stateParams.game));
        }
        this.items = [];
        this.stats = [];

        if (!!self.game) {
            this.playerName = self.game.playerName;
            if (!!self.game.items) {
                this.items = this.items.concat(self.game.items);
            }
            if (!!self.game.stats) {
                this.stats = this.stats.concat(self.game.stats);
            }
        }
        self.bookId = self.$stateParams.bookId;
        this.paragraph = self.persistenceService.getOrCreateParagraph(self.bookId, self.$stateParams.paragraphNr);
        self.popupAbandonGameConfig = { id : 'popupAbandonGame' };
    }

    startBattle() {
        self.$location.url(self.constants.url.battle + '/' + self.game.id);
    }

    jumpToParagraph() {
        self.$location.url(self.constants.url.paragraph + "/" + self.paragraphNr);
    }

    displayAbandonGamePopup(removedRow) {
        self.endGamePopupService.show(self.popupAbandonGameConfig.id, self.callbackAbandonGamePopup);
    }

    callbackAbandonGamePopup(popupDomElementId, endGameReason) {
        let updatedGame = self.persistenceService.getGame(self.game.id);
        updatedGame.endGameReason = endGameReason;
        self.persistenceService.updateGame(updatedGame);
        self.$location.url(self.constants.url.games);
    }
}

export default InGameController;