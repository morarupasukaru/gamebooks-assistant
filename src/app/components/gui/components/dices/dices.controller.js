class DicesController {
    /*@ngInject*/
    constructor(dicesService, gamePersistenceService, adventurePersistenceService) {
        this.dicesService = dicesService;
        this.gamePersistenceService = gamePersistenceService;
        this.adventurePersistenceService = adventurePersistenceService;
        this.initData();
        this.clear();
    }

    initData() {
        let game = this.gamePersistenceService.getGame(decodeURIComponent(this.gameId));
        let adventure = this.adventurePersistenceService.getAdventure(game.adventureId);
        if (!!adventure.dice) {
            this.min = adventure.dice.min;
            this.max = adventure.dice.max;
        }
    }

    rollDice() {
        this.appendToResult(this.dicesService.rollDices(this.min, this.max));
    }

    clear() {
        this.dicesValue = '';
    }

    appendToResult(value) {
        if (this.dicesValue !== '') {
            this.dicesValue = this.dicesValue + ','
        }
        this.dicesValue = this.dicesValue + value;
    }

}

export default DicesController;