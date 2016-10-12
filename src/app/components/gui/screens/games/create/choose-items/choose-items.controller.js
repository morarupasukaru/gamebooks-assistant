class ChooseItemsController {
    /*@ngInject*/
    constructor(preScreenLoadingInterceptorsCallerService, $stateParams, messagesService, $window, adventurePersistenceService, createGameService) {
        preScreenLoadingInterceptorsCallerService.intercept();
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
        this.createGameService.startGame(this.adventure, this.$stateParams.playerName, this.playerItems);
    }

    back() {
        this.$window.history.back();
    }
}

export default ChooseItemsController;