let self;

class PermanentPersistenceService {

    /*@ngInject*/
    constructor(softwareRequirementsChecksService) {
        self = this;
        self.isServiceEnabled = softwareRequirementsChecksService.isLocalStorageSupported();
    }

    // TODO verson?

    save(key, value) {
        if (!self.isServiceEnabled) {
            return ;
        }
        localStorage.setItem(key, JSON.stringify(value));
    }

    get(key) {
        if (!self.isServiceEnabled) {
            return ;
        }
        let json = localStorage.getItem(key);
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
        self.localStorage.removeItem(key);
    }
}

export default PermanentPersistenceService;