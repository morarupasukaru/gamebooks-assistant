class LibraryPersistenceService {

    /*@ngInject*/
    constructor(remoteJsonRetrieverService, $q, adventurePersistenceService) {
        this.remoteJsonRetrieverService = remoteJsonRetrieverService;
        this.$q = $q;
        this.adventurePersistenceService = adventurePersistenceService;
    }

    downloadLibrary(url) {
        let self = this;
        let deferred = this.$q.defer();
        let promise = this.remoteJsonRetrieverService.retrieveJson(url);
        promise.then(
            function(json) {
                self.adventurePersistenceService.updateDownloadableAdventures(json);
                deferred.resolve('Success');
            },
            function(reason) {
                deferred.reject(reason);
            }
        );
        return deferred.promise;
    }
}

export default LibraryPersistenceService;