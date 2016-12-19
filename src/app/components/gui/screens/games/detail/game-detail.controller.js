class GameDetailController {
    /*@ngInject*/
    constructor($location, constants, $stateParams, gamePersistenceService, adventurePersistenceService, $translate, messagesService) {
        this.$location = $location;
        this.constants = constants;
        this.$stateParams = $stateParams;
        this.gamePersistenceService = gamePersistenceService;
        this.adventurePersistenceService = adventurePersistenceService;
        this.$translate = $translate;
        this.messagesService = messagesService;
        this.stats = [];

        this.game = this.gamePersistenceService.getGame(decodeURIComponent(this.$stateParams.gameId));
        this.playerName = this.game.playerName;
        if (!!this.game.stats) {
            this.stats = this.stats.concat(this.game.stats);
        }
        this.adventureId = this.$stateParams.adventureId;
        this.paragraph = this.adventurePersistenceService.getOrCreateParagraph(this.adventureId, this.$stateParams.paragraphNr);
        this.adventure = this.adventurePersistenceService.getAdventure(this.adventureId);

        this.checkAvailableAdventure();
    }

    checkAvailableAdventure() {
        if (!this.adventure) {
            this.messagesService.errorMessage('The adventure is not available', false)
        }
    }

    goToGameRulesParagraph() {
        this.gamePersistenceService.setCurrentParagraphNrOfGame(this.game.id, this.paragraph.paragraphNr, this.adventure.gameRulesParagraphId);
        let nextUrl = this.gamePersistenceService.getUrlOfGame(this.game.id);
        this.$location.url(nextUrl);
    }

    isMapAvailable() {
        return !!this.adventure.toggles.map;
    }

    isDicesAvailable() {
        return !!this.adventure.toggles.dices;
    }

    isStatsAvailable() {
        return !!this.adventure.toggles.stats;
    }

    isCharactersAvailable() {
        return !!this.adventure.toggles.characters;
    }

    isGameRulesAvailable() {
        return !!this.adventure.gameRulesParagraphId;
    }

    onSubListSave(list, entries) {
        this.game.lists[list] = entries;
        this.gamePersistenceService.updateGame(this.game);
    }
}

export default GameDetailController;