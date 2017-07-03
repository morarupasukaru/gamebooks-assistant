class LibraryImportController {
    /*@ngInject*/
    constructor($location,
                constants,
                messagesService,
                libraryPersistenceService,
                $stateParams) {
        this.constants = constants;
        this.$location = $location;
        this.libraryPersistenceService = libraryPersistenceService;
        this.messagesService = messagesService;
        this.$stateParams = $stateParams;
        if (!!$stateParams.import) {
            this.downloadLibrary($stateParams.import);
        } else {
            this.displayAdventures();
        }
    }

    downloadLibrary(url) {
        let self = this;
        let promise = this.libraryPersistenceService.downloadLibrary(url);
        promise.then(
            function(json) {
                self.displayAdventures();
            },
            function(reason) {
                self.messagesService.errorMessage(reason, false);
            }
        );
    }

    displayAdventures() {
        this.$location.url('/games');
    }
}

export default LibraryImportController;