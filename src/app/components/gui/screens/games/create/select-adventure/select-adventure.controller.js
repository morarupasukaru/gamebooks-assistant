class SelectAdventureController {
    /*@ngInject*/
    constructor(constants, $location, $window, adventurePersistenceService, $timeout) {
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
        let adventure = this.adventurePersistenceService.getAdventure(this.selectedAdventureId);
        if (!!adventure && !!adventure.downloadUrl && !adventure.downloaded) {
            let self = this;
            let promise = this.adventurePersistenceService.downloadAdventureWithId(this.selectedAdventureId);
            promise.then(
                function(json) {
                    self.toPlayerNameSelection();
                },
                function(reason) {
                    self.initData();
                }
            );
        } else {
            this.toPlayerNameSelection();
        }
    }

    toPlayerNameSelection() {
        this.$location.url(this.constants.url.createPlayerForNewGame + "?adventureId=" + encodeURIComponent(this.selectedAdventureId));
    }
}

export default SelectAdventureController;