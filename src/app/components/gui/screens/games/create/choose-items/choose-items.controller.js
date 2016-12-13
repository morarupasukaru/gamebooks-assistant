class ChooseItemsController {
    /*@ngInject*/
    constructor($stateParams, messagesService, $window, adventurePersistenceService, createGameService) {
        this.messagesService = messagesService;
        this.adventurePersistenceService = adventurePersistenceService;
        this.$window = $window;
        this.$stateParams = $stateParams;
        this.createGameService = createGameService;

        this.adventure = adventurePersistenceService.getAdventure($stateParams.adventureId);
        if (!!this.adventure.items) {
            this.playerItems = this.adventure.items;
            for (let i = 0; i < this.playerItems.length; i++) {
                this.playerItems[i].description = this.playerItems[i].description;
            }
        } else {
            this.playerItems = [];
        }
        this.displayNotes();
    }

    isItemsDisplayed() {
        return !!this.adventure.items && this.adventure.items.length > 0;
    }

    displayNotes() {
        if (!!this.adventure.startGameNote) {
            this.messagesService.infoMessage(this.adventure.startGameNote, false);
        }
    }

    getItems() {
        return this.playerItems;
    }

    startGame() {
        this.createGameService.startGame(this.adventure, this.$stateParams.playerName, this.playerItems, this.getStatsInUrlParam());
    }

    back() {
        this.$window.history.back();
    }

    getStatsInUrlParam() {
        let stats = [];
        if (!!this.adventure.toggles.stats) {
            let statsParamValue = this.$stateParams['stats'];
            if (!!this.adventure.stats) {
                for (let i = 0; i < this.adventure.stats.length; i++) {
                    let currentStats = this.adventure.stats[i];
                    let startPos = statsParamValue.indexOf(currentStats.name);
                    startPos = startPos + currentStats.name.length;
                    let endPos = statsParamValue.indexOf(',', startPos);
                    let statsValue = statsParamValue.substring(startPos, endPos);
                    stats.push({
                            name  : currentStats.name,
                            value : new Number(statsValue)
                        });
                }
            }
        }
        return stats;
    }
}

export default ChooseItemsController;