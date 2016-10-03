class ChooseItemsController {
    /*@ngInject*/
    constructor(preScreenLoadingInterceptorsCallerService, $stateParams, messagesService, $window, $location, constants, gamePersistenceService, adventurePersistenceService) {
        preScreenLoadingInterceptorsCallerService.intercept();
        this.messagesService = messagesService;
        this.adventurePersistenceService = adventurePersistenceService;
        this.gamePersistenceService = gamePersistenceService;
        this.$window = $window;
        this.$stateParams = $stateParams;
        this.$location = $location;
        this.constants = constants;

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
        let game = this.buildGame();
        game = this.gamePersistenceService.addGame(game);
        this.gamePersistenceService.setCurrentParagraphNrOfGame(game.id, null, this.adventure.startParagraphNr);
        this.$location.url(this.gamePersistenceService.getUrlOfGame(game.id));
    }

    buildGame() {
        let game = {
            playerName : this.$stateParams.playerName,
            adventureId : this.adventure.id,
            items : JSON.parse(JSON.stringify(this.playerItems))
        };
        game.stats = this.getStatsInUrlParam();
        return game;
    }

    getStatsInUrlParam() {
        let statsParamValue = this.$stateParams['stats'];
        let stats = [];
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
        return stats;
    }


    back() {
        this.$window.history.back();
    }
}

export default ChooseItemsController;