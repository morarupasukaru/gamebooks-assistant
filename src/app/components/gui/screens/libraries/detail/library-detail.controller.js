class LibraryDetailController {
    /*@ngInject*/
    constructor(preScreenLoadingInterceptorsCallerService, persistenceService, adventurePersistenceService, $stateParams, $location, constants, popupService, messagesService, $timeout, $window, formHelperService) {
        // TODO libraryPersistenceService
        preScreenLoadingInterceptorsCallerService.intercept();
        this.persistenceService = persistenceService;
        this.adventurePersistenceService = adventurePersistenceService;
        this.$stateParams = $stateParams;
        this.$location = $location;
        this.constants = constants;
        this.popupService = popupService;
        this.messagesService = messagesService;
        this.$timeout = $timeout;
        this.$window = $window;
        this.formHelperService = formHelperService;
        this.initData();
        this.setInitialFocus();
    }

    initData() {
        let adventureId = encodeURIComponent(this.$stateParams.adventureId);
        if (!!adventureId) {
            if ("create" === adventureId) {
                this.adventure = {
                    stats: [],
                    items: []
                };
                this.mode = "create";
            } else {
                this.adventure = this.adventurePersistenceService.getAdventure(adventureId);
                this.mode = "edit";
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

        if (!!this.adventure.items) {
            let modifiedItems = [];
            for (let i = 0; i < this.adventure.items.length; i++) {
                modifiedItems.push({
                    quantity: this.adventure.items[i].quantity,
                    description: this.adventure.items[i].description
                });
            }
            this.adventure.items = modifiedItems;
        }
        try {
            this.adventurePersistenceService.updateAdventureWithoutParagraphs(this.adventure);
            this.$location.url(this.constants.url.adventures);
        } catch (error) {
            this.messagesService.errorMessage(error, false);
        }
    }
}

export default LibraryDetailController;