class LibraryPersistenceService {

    /*@ngInject*/
    constructor(constants, persistenceService, messagesService) {
        this.persistenceService = persistenceService;
        this.constants = constants;
        this.messagesService = messagesService;
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
        this.checkDupplicateLibrary(library);
        if (!library.id) {
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
            let libraries = this.getLibraries();
            for (let i = 0; i < libraries.length; i++) {
                if (library.libraryUrl === libraries[i].libraryUrl) {
                    throw this.constants.errors.libraryAlreadyExist;
                }
            }
        }
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