let self;

class TemporaryPersistenceService {

    /*@ngInject*/
    constructor($cookies, constants, softwareRequirementsChecksService) {
        self = this;
        self.isServiceEnabled = softwareRequirementsChecksService.isLocalStorageSupported();
        self.$cookies = $cookies;
        self.constants = constants;
    }

    // TODO make cookies work between screen
    // TODO timeout?

    save(key, value) {
        if (!self.isServiceEnabled) {
            return ;
        }
        self.$cookies.put(self.resolveKey(key), JSON.stringify(value));
    }

    get(key) {
        if (!self.isServiceEnabled) {
            return ;
        }
        let json = self.$cookies.get(self.resolveKey(key));
        if (json !== null && json !== "undefined" && json !== undefined) {
            return JSON.parse(json);
        } else {
            return null;
        }
    }

    removeAll() {
        if (!self.isServiceEnabled) {
            return ;
        }
        let keyValues = self.$cookies.getAll();
        let keys = Object.keys(keyValues);
        let i;
        for (i = 0; i < keys.length; i++) {
            self.$cookies.remove(key[i]);
        }
    }

    remove(key) {
        if (!self.isServiceEnabled) {
            return ;
        }
        self.$cookies.remove(self.resolveKey(key));
    }

    resolveKey(key) {
        return self.constants.version + "." + key;
    }
}

export default TemporaryPersistenceService;