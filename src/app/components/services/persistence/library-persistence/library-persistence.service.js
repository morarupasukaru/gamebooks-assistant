class LibraryPersistenceService {

    /*@ngInject*/
    constructor(constants, persistenceService, messagesService, remoteJsonRetrieverService, $q, $filter, adventurePersistenceService) {
        this.persistenceService = persistenceService;
        this.constants = constants;
        this.messagesService = messagesService;
        this.remoteJsonRetrieverService = remoteJsonRetrieverService;
        this.$q = $q;
        this.$filter = $filter;
        this.adventurePersistenceService = adventurePersistenceService;
    }

    downloadLibrary(library) {
        let self = this;
        let deferred = this.$q.defer();
        let promise = this.remoteJsonRetrieverService.retrieveJson(library.libraryUrl);
        promise.then(
            function(json) {
                library.downloadHistory.push(self.now() + ' : downloaded');
                self.updateLibrary(library);
                self.adventurePersistenceService.updateDownloadableAdventures(json);
                self.messagesService.successMessage('List of the adventures of the library is downloaded', false);
                deferred.resolve('Success');
            },
            function(reason) {
                library.downloadHistory.push(self.now() + ' : error');
                self.updateLibrary(library);
                self.messagesService.errorMessage(reason, false);
                deferred.reject(reason);
            }
        );
        return deferred.promise;
    }

    now() {
        let now = new Date();
        return this.$filter('date')(now, 'dd.MM.yyyy HH:mm');
    }


    deleteLibrary(libraryId) {
        this.persistenceService.remove(this.getLibraryPersistenceKey(libraryId));
    }

    importLibraries(librariesStr) {
        try {
            let libraries = JSON.parse(librariesStr);
            this.checkMissingFields(libraries);
            for (let i = 0; i < libraries.length; i++) {
                let library = libraries[i];
                this.updateLibrary(library);
            }
        } catch (error) {
            this.messagesService.errorMessage('Cannot import libraries', false);
            throw error;
        }
    }

    checkMissingFields(libraries) {
        for (let i = 0; i < libraries.length; i++) {
            let library = libraries[i];
            let missingMandatoryFields = [];
            if (!library.siteName) {
                missingMandatoryFields.push('siteName');
            }
            if (!library.libraryUrl) {
                missingMandatoryFields.push('libraryUrl');
            }
            if (missingMandatoryFields.length > 0) {
                this.messagesService.errorMessage('Cannot import a library because of missing mandatory fields: ' + missingMandatoryFields.join(', '), false);
                throw this.constants.errors.missingMandatoryFields;
            }
        }
    }

    updateLibrary(library) {
        if (!library.id) {
            this.checkDupplicateLibrary(library);
            library.id = this.getIdFromLibrarySiteName(library.siteName);
        }
        if (!library.downloadHistory) {
            library.downloadHistory = [];
            library.downloadHistory.push('Not downloaded yet');
        }
        this.persistenceService.save(this.getLibraryPersistenceKey(library.id), library);
    }

    getIdFromLibrarySiteName(siteName) {
        return encodeURIComponent(siteName.replace(/\s+/g, '-').toLowerCase()) + new Date().getTime().toString();
    }

    checkDupplicateLibrary(library) {
        if (!!library.libraryUrl) {
            if (this.hasLibraryUrl(library.libraryUrl)) {
                throw this.constants.errors.libraryAlreadyExist;
            }
        }
    }

    hasLibraryUrl(libraryUrl) {
        let libraries = this.getLibraries();
        for (let i = 0; i < libraries.length; i++) {
            if (libraryUrl === libraries[i].libraryUrl) {
                return true;
            }
        }
        return false;
    }

    exportLibraries() {
        let libraries = this.getLibraries();
        for (let i = 0; i < libraries.length; i++) {
            delete libraries[i].id;
            delete libraries[i].lastDownload;
        }
        return JSON.stringify(libraries);
    }

    getLibraries() {
        let result = [];
        let keys = this.getLibraryPersistenceKeys();
        for (let i = 0; i < keys.length; i++) {
            result.push(this.getLibrary(keys[i]));
        }
        return result;
    }

    getLibraryPersistenceKeys() {
        let keys = Object.keys(localStorage);
        let result = [];
        for (let i = 0; i < keys.length; i++) {
            if (keys[i].startsWith(this.constants.data.library)) {
                result.push(keys[i]);
            }
        }
        return result;
    }

    getLibrary(libraryId) {
        return this.persistenceService.get(this.getLibraryPersistenceKey(libraryId));
    }

    deleteLibrary(libraryId) {
        this.persistenceService.remove(this.getLibraryPersistenceKey(libraryId));
    }

    getLibraryPersistenceKey(libraryId) {
        let key = libraryId;
        if (!key.startsWith(this.constants.data.library)) {
            key = this.constants.data.library + "." + key;
        }
        return key;
    }
}

export default LibraryPersistenceService;