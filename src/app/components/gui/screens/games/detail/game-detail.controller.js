class GameDetailController {
    /*@ngInject*/
    constructor(preScreenLoadingInterceptorsCallerService, $location, constants, endGamePopupService, $stateParams, gamePersistenceService, adventurePersistenceService, $translate, messagesService) {
        preScreenLoadingInterceptorsCallerService.intercept();
        this.$location = $location;
        this.constants = constants;
        this.endGamePopupService = endGamePopupService;
        this.$stateParams = $stateParams;
        this.gamePersistenceService = gamePersistenceService;
        this.adventurePersistenceService = adventurePersistenceService;
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
        this.paragraph = this.adventurePersistenceService.getOrCreateParagraph(this.adventureId, this.$stateParams.paragraphNr);
        this.adventure = this.adventurePersistenceService.getAdventure(this.adventureId);
        this.popupAbandonGameConfig = { id : 'popupAbandonGame' };
        this.checkAvailableAdventure();
    }

    checkAvailableAdventure() {
        if (!this.adventure) {
            this.messagesService.errorMessage('The adventure is not available', false)
        }
    }

    isNotesAvailable() {
        return !!this.adventure.toggles.notes;
    }

    isBattleAvailable() {
        return !!this.adventure.toggles.battle;
    }

    startBattle() {
        this.$location.url(this.constants.url.battle + '/' + this.game.id);
    }

    isAbandonGameAvailable() {
        return !!this.adventure.toggles.endGame;
    }

    displayAbandonGamePopup(removedRow) {
        let self = this;
        this.endGamePopupService.show(
            this.popupAbandonGameConfig.id,
            function(popupDomElementId, endGameReason) {
                let updatedGame = self.gamePersistenceService.getGame(self.game.id);
                updatedGame.endGameReason = endGameReason;
                self.gamePersistenceService.updateGame(updatedGame);
                self.$location.url(self.constants.url.games);
            }
        );
    }
}

export default GameDetailController;