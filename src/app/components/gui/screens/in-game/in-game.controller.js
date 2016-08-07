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
        this.notes = [];
        this.items = [];
        this.stats = [];

        if (!!self.game) {
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
            let i;
            for (i = 0; i < self.paragraph.notes.length; i++) {
                this.notes.push({
                    note : self.$translate.instant(self.paragraph.notes[i].note),
                    readonly : true
                });
            }
        }

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