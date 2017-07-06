class AdventureDetailController {
    /*@ngInject*/
    constructor(persistenceService, adventurePersistenceService, $stateParams, $location, constants, messagesService, $timeout, $window, formHelperService, $translate, $log) {
        this.persistenceService = persistenceService;
        this.adventurePersistenceService = adventurePersistenceService;
        this.$stateParams = $stateParams;
        this.$location = $location;
        this.constants = constants;
        this.messagesService = messagesService;
        this.$timeout = $timeout;
        this.$window = $window;
        this.formHelperService = formHelperService;
        this.$translate = $translate;
        this.$log = $log;
        this.initData();

        this.setInitialFocus();
    }

    initData() {
        let adventureId = encodeURIComponent(this.$stateParams.adventureId);
        if (!!adventureId) {
            if ("create" === adventureId) {
                this.adventure = {
                    toggles: {
                        battle: true,
                        dices: true,
                        goto: true,
                        characters: true,
                        map: true
                    }
                };
                this.mode = "create";
            } else {
                this.adventure = this.adventurePersistenceService.getAdventure(adventureId);
                this.mode = "edit";
            }
            if (!this.adventure.lists) {
                this.adventure.lists = { values: {} };
            }
        }
    }

    setInitialFocus() {
        let that = this;
        this.$timeout(function() {
            let element;
            if (that.mode === "create") {
                element = that.$window.document.getElementById("name");
            } else {
                element = that.$window.document.getElementById("authors");
            }
            if(!!element) {
                element.focus();
            }
        });
    }

    save(form) {
        this.formHelperService.setErrorFieldsAsDirty(form, true);
        if (form.$invalid) {
            return ;
        }

        if (!this.adventure.toggles.dices) {
            delete this.adventure.dice;
        }
        try {
            this.adventurePersistenceService.updateAdventureWithoutParagraphs(this.adventure);
            this.$location.url('/games');
        } catch (error) {
            this.$log.warn(error);
        }
    }

    onListSave(entries) {
        if (!!this.adventure.lists.keys) {
            for (let i = 0; i < this.adventure.lists.keys.length; i++) {
                let key = this.adventure.lists.keys[i];
                if (entries.indexOf(key) === -1) {
                    delete this.adventure.lists.values[key];
                }
            }
        }
        this.adventure.lists.keys = entries;
    }

    onSubListSave(list, entries) {
        this.adventure.lists.values[list] = entries;
    }
}

export default AdventureDetailController;