class SelectAdventureController {
    /*@ngInject*/
    constructor(preScreenLoadingInterceptorsCallerService, constants, $location, $window, adventurePersistenceService) {
        preScreenLoadingInterceptorsCallerService.intercept();
        this.$location = $location;
        this.$window = $window;
        this.constants = constants;
        this.adventurePersistenceService = adventurePersistenceService;
        this.initData();
    }

    initData() {
        let adventurePersistenceKeys = this.adventurePersistenceService.getAdventurePersistenceKeys();
        this.adventures = [];
        for (let i = 0; i < bookPersistenceKeys.length; i++) {
            let adventure = this.adventurePersistenceService.getAdventure(adventurePersistenceKeys[i]);
            this.adventures.push(adventure);
        }
        this.selectedAdventureId = this.adventures[0].id;
    }

    back() {
        this.$window.history.back();
    }

    next() {
        this.$location.url(this.constants.url.createPlayerForNewGame + "?adventureId=" + encodeURIComponent(this.selectedAdventureId));
    }
}

export default SelectAdventureController;