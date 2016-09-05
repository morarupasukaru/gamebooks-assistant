class SelectAdventureController {
    /*@ngInject*/
    constructor(preScreenLoadingInterceptorsCallerService, constants, $location, $window, bookPersistenceService) {
        preScreenLoadingInterceptorsCallerService.intercept();
        this.$location = $location;
        this.$window = $window;
        this.constants = constants;
        this.bookPersistenceService = bookPersistenceService;
        this.initData();
    }

    initData() {
        let bookPersistenceKeys = this.bookPersistenceService.getBookPersistenceKeys();
        this.adventures = [];
        for (let i = 0; i < bookPersistenceKeys.length; i++) {
            let adventure = this.bookPersistenceService.getBook(bookPersistenceKeys[i]);
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