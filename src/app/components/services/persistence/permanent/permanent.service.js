let self;

class PermanentPersistenceService {

    /*@ngInject*/
    constructor(softwareRequirementsChecksService, constants) {
        self = this;
        self.isServiceEnabled = softwareRequirementsChecksService.isLocalStorageSupported();
        self.constants = constants;
    }

    save(key, value) {
        if (!self.isServiceEnabled) {
            return ;
        }
        localStorage.setItem(self.resolveKey(key), JSON.stringify(value));
    }

    get(key) {
        if (!self.isServiceEnabled) {
            return ;
        }
        let json = localStorage.getItem(self.resolveKey(key));
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
            self.localStorage.removeItem(keys[i]);
        }
    }

    remove(key) {
        if (!self.isServiceEnabled) {
            return ;
        }
        self.localStorage.removeItem(self.resolveKey(key));
    }

    resolveKey(key) {
        return self.constants.version + "." + key;
    }
}

export default PermanentPersistenceService;