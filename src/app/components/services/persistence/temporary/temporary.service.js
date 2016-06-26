let self;

class TemporaryPersistenceService {

    /*@ngInject*/
    constructor($cookies, softwareRequirementsChecksService) {
        self = this;
        self.isServiceEnabled = softwareRequirementsChecksService.isLocalStorageSupported();
        self.$cookies = $cookies;
    }

    // TODO make cookies work between screen
    // TODO verson?
    // TODO timeout?

    save(key, value) {
        if (!self.isServiceEnabled) {
            return ;
        }
        self.$cookies.put(key, JSON.stringify(value));
    }

    get(key) {
        if (!self.isServiceEnabled) {
            return ;
        }
        let json = self.$cookies.get(key);
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
            self.remove(keys[i]);
        }
    }

    remove(key) {
        if (!self.isServiceEnabled) {
            return ;
        }
        self.$cookies.remove(key);
    }
}

export default TemporaryPersistenceService;