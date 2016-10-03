class PredefinedDataLoaderService {

    /*@ngInject*/
    constructor(libraryPersistenceService) {
        this.libraryPersistenceService = libraryPersistenceService;
    }

    loadPredefinedData() {
        if (!this.libraryPersistenceService.hasLibraryUrl('library-example.json')) {
            let libraryStr = '[{"siteName":"Example Library","libraryUrl":"library-example.json"}]';
            this.libraryPersistenceService.importLibraries(libraryStr);
        }
    }
}

export default PredefinedDataLoaderService;