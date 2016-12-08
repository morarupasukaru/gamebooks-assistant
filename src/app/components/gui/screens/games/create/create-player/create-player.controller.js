class CreatePlayerController {
    /*@ngInject*/
    constructor(preScreenLoadingInterceptorsCallerService, $stateParams, $window, $location, constants, dicesService, adventurePersistenceService, $timeout, createGameService) {
        preScreenLoadingInterceptorsCallerService.intercept();
        this.constants = constants;
        this.$window = $window;
        this.$location = $location;
        this.dicesService = dicesService;
        this.$timeout = $timeout;
        this.$stateParams = $stateParams;
        this.createGameService = createGameService;
        this.adventure = adventurePersistenceService.getAdventure($stateParams.adventureId);
        this.loadData(this.adventure);
        this.generateStats();
        this.setInitialFocus();
    }

    loadData(adventure) {
        this.stats = [];
        let self = this;
        if (!!adventure.stats) {
            for (let i = 0; i < adventure.stats.length; i++) {
                let currentStats = adventure.stats[i];
                this.stats.push({ name : currentStats.name,
                    generate : function() {
                            return currentStats.init.constant + self.dicesService.rollDices(
                                currentStats.init.dicesQuantity,
                                adventure.dice.min,
                                adventure.dice.max);
                        }
                    });
            }
        }
    }

    generateStats() {
        for (let i = 0; i < this.stats.length; i++) {
            let stats = this.stats[i];
            stats.value = stats.generate();
        }
    }

    setInitialFocus() {
        let that = this;
        this.$timeout(function() {
            let element = that.$window.document.getElementById("playerName");
            if(!!element) {
                element.focus();
            }
        });
    }

    back() {
        this.$window.history.back();
    }

    next(invalid) {
        if (!!invalid) {
            return ;
        }

        if (this.hasItems()) {
            let nextUrl = this.constants.url.chooseItemsForNewGame +
              "?adventureId=" + encodeURIComponent(this.adventure.id) +
              "&playerName=" + encodeURIComponent(this.playerName);

            if (this.hasStats()) {
                let statsParam = '';

                for (let i = 0; i < this.stats.length; i++) {
                    let stats = this.stats[i];
                    statsParam = statsParam + encodeURIComponent(stats.name) + encodeURIComponent(stats.value) + ',';
                }

                nextUrl = nextUrl + "&stats=" + statsParam;
            }
            this.$location.url(nextUrl);
        } else {
            this.createGameService.startGame(this.adventure, this.playerName, [], this.stats);
        }
    }

    hasStats() {
        return !!this.adventure.stats && this.adventure.stats.length > 0 && !!this.adventure.toggles && !!this.adventure.toggles.stats;
    }

    hasItems() {
        return !!this.adventure.items && this.adventure.items.length > 0 && !!this.adventure.toggles && !!this.adventure.toggles.items;
    }
}

export default CreatePlayerController;