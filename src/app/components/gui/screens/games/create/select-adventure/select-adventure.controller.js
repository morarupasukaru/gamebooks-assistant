class SelectAdventureController {
    /*@ngInject*/
    constructor(preScreenLoadingInterceptorsCallerService, constants, $location, $window, adventurePersistenceService, $timeout) {
        preScreenLoadingInterceptorsCallerService.intercept();
        this.$location = $location;
        this.$window = $window;
        this.constants = constants;
        this.adventurePersistenceService = adventurePersistenceService;
        this.$timeout = $timeout;
        this.initData();
        this.setInitialFocus();
    }

    initData() {
        let adventurePersistenceKeys = this.adventurePersistenceService.getAdventurePersistenceKeys();
        this.adventures = [];
        for (let i = 0; i < adventurePersistenceKeys.length; i++) {
            let adventure = this.adventurePersistenceService.getAdventure(adventurePersistenceKeys[i]);
            this.adventures.push(adventure);
        }
        this.selectedAdventureId = this.adventures[0].id;
    }

    setInitialFocus() {
        let that = this;
        this.$timeout(function() {
            let element = that.$window.document.getElementById("selectedAdventure");
            if(!!element) {
                element.focus();
            }
        });
    }

    back() {
        this.$window.history.back();
    }

    next() {
        this.$location.url(this.constants.url.createPlayerForNewGame + "?adventureId=" + encodeURIComponent(this.selectedAdventureId));
    }
}

export default SelectAdventureController;