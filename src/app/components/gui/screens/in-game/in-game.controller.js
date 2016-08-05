let self;
class InGameController {
    /*@ngInject*/
    constructor(preScreenLoadingInterceptorsCallerService, $location, constants, endGamePopupService, $stateParams, persistenceService) {
        self = this;
        preScreenLoadingInterceptorsCallerService.intercept();
        self.$location = $location;
        self.constants = constants;
        self.endGamePopupService = endGamePopupService;
        self.$stateParams = $stateParams;
        self.persistenceService = persistenceService;
        if (!!$stateParams.game) {
            self.game = self.persistenceService.getGame(decodeURIComponent($stateParams.game));
        }
        this.notes = [];
        this.items = [];
        this.stats = [];

        if (!!self.game) {
            this.gameId = self.game.id;
            this.playerName = self.game.playerName;
            if (!!self.game.notes) {
                this.notes = this.notes.concat(self.game.notes);
            }
            if (!!self.game.items) {
                this.items = this.items.concat(self.game.items);
            }
            if (!!self.game.stats) {
                this.stats = this.stats.concat(self.game.stats);
            }
        }
        this.paragraph = self.persistenceService.getOrCreateParagraph(self.$stateParams.bookId, self.$stateParams.paragraphNr);
        if (!!self.paragraph.notes) {
            this.notes = this.notes.concat(self.paragraph.notes);
        }

        self.popupAbandonGameConfig = { id : 'popupAbandonGame' };
    }

    startBattle() {
        self.$location.url(self.constants.url.battle)
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