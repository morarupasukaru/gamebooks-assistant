class LibraryPersistenceService {

    /*@ngInject*/
    constructor(constants, persistenceService, messagesService) {
        this.persistenceService = persistenceService;
        this.constants = constants;
        this.messagesService = messagesService;
    }

    importLibraries(librariesStr) {
        try {
            let libraries = JSON.parse(librariesStr);
            checkMissingFields(libraries);
            let alreadyExistingLibrarySiteNames = [];
            for (let i = 0; i < libraries.length; i++) {
                let library = libraries[i];
                this.updateLibrary(library);
            }
        } catch (error) {
            this.messagesService.errorMessage('Cannot import libraries', false);
        }
    }

    checkMissingFields(libraries) {
        for (let i = 0; i < libraries.length; i++) {
            let library = libraries[i];
            let missingMandatoryFields = [];
            if (!library.siteName) {
                missingMandatoryFields.push('siteName');
            }
            if (!library.jsonUrl) {
                missingMandatoryFields.push('jsonUrl');
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
            library.id = new Date().getTime().toString();
        }
        if (!library.lastDownload) {
            library.lastDownload = 'Not downloaded yet';
        }
        this.persistenceService.save(this.getLibraryPersistenceKey(library.id), library);
    }

    checkDupplicateLibrary(library) {
        if (!!library.jsonUrl) {
            let libraries = this.getLibraries();
            for (let i = 0; i < libraries.length; i++) {
                if (library.jsonUrl === libraries[i].jsonUrl) {
                    throw this.constants.errors.libraryAlreadyExist;
                }
            }
        }
    }

    exportLibraries() {
        let libraries = this.getLibraries();
        for (let i = 0; i < libraries.length; i++) {
            delete libraries[i].id;
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