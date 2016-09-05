class InGameController {
    /*@ngInject*/
    constructor(preScreenLoadingInterceptorsCallerService, $location, constants, endGamePopupService, $stateParams, gamePersistenceService, bookPersistenceService, $translate, messagesService) {
        preScreenLoadingInterceptorsCallerService.intercept();
        this.$location = $location;
        this.constants = constants;
        this.endGamePopupService = endGamePopupService;
        this.$stateParams = $stateParams;
        this.gamePersistenceService = gamePersistenceService;
        this.bookPersistenceService = bookPersistenceService;
        this.$translate = $translate;
        this.messagesService = messagesService;
        this.items = [];
        this.stats = [];

        this.game = this.gamePersistenceService.getGame(decodeURIComponent(this.$stateParams.gameId));
        this.playerName = this.game.playerName;
        if (!!this.game.items) {
            this.items = this.items.concat(this.game.items);
        }
        if (!!this.game.stats) {
            this.stats = this.stats.concat(this.game.stats);
        }
        this.adventureId = this.$stateParams.adventureId;
        this.paragraph = this.bookPersistenceService.getOrCreateParagraph(this.adventureId, this.$stateParams.paragraphNr);
        this.popupAbandonGameConfig = { id : 'popupAbandonGame' };
        this.checkAvailableBook();
    }

    checkAvailableBook() {
        let adventure = this.bookPersistenceService.getBook(this.adventureId);
        if (!adventure) {
            this.messagesService.errorMessage('The adventure is not available', false)
        }
    }

    startBattle() {
        this.$location.url(this.constants.url.battle + '/' + this.game.id);
    }

    displayAbandonGamePopup(removedRow) {
        this.endGamePopupService.show(this.popupAbandonGameConfig.id, this.callbackAbandonGamePopup);
    }

    callbackAbandonGamePopup(popupDomElementId, endGameReason) {
        let updatedGame = this.gamePersistenceService.getGame(this.game.id);
        updatedGame.endGameReason = endGameReason;
        this.gamePersistenceService.updateGame(updatedGame);
        this.$location.url(this.constants.url.games);
    }
}

export default InGameController;