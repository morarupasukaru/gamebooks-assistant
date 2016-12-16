let collapse = {
    map : false,
    notes : false,
    stats : false,
    items : false,
    dices : false,
};

class GameDetailController {
    /*@ngInject*/
    constructor($location, constants, popupService, $stateParams, gamePersistenceService, adventurePersistenceService, $translate, messagesService) {
        this.$location = $location;
        this.constants = constants;
        this.popupService = popupService;
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

    isDicesAvailable() {
        return !!this.adventure.toggles.dices;
    }

    isItemsAvailable() {
        return !!this.adventure.toggles.items;
    }

    isStatsAvailable() {
        return !!this.adventure.toggles.stats;
    }

    isBattleAvailable() {
        return !!this.adventure.toggles.battle;
    }

    startBattle() {
        this.$location.url(this.constants.url.battle + '/' + this.game.id);
    }

    isGameRulesAvailable() {
        return !!this.adventure.gameRulesParagraphId;
    }

    goToGameRulesParagraph() {
        this.gamePersistenceService.setCurrentParagraphNrOfGame(this.game.id, this.paragraph.paragraphNr, this.adventure.gameRulesParagraphId);
        let nextUrl = this.gamePersistenceService.getUrlOfGame(this.game.id);
l        this.$location.url(nextUrl);
    }

    toogleCollapseMap() {
        collapse.map = !collapse.map;
    }

    toogleCollapseNotes() {
        collapse.notes = !collapse.notes;
    }

    toogleCollapseStats() {
        collapse.stats = !collapse.stats;
    }

    toogleCollapseItems() {
        collapse.items = !collapse.items;
    }

    toogleCollapseDices() {
        collapse.dices = !collapse.dices;
    }

    mapCollapsed() {
        return collapse.map;
    }

    notesCollapsed() {
        return collapse.notes;
    }

    statsCollapsed() {
        return collapse.stats;
    }

    itemsCollapsed() {
        return collapse.items;
    }

    dicesCollapsed() {
        return collapse.dices;
    }
}

export default GameDetailController;