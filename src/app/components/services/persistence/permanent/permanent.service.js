let self;

class PermanentPersistenceService {

    /*@ngInject*/
    constructor() {
        self = this;
    }

    // TODO verson?

    save(key, value) {
            localStorage.setItem(key, JSON.stringify(value));
    }

    get(key) {
        let json = localStorage.getItem(key);
        if (json !== null && json !== "undefined" && json !== undefined) {
            return JSON.parse(json);
        } else {
            return null;
        }
    }

    removeAll() {
        let keyValues = self.$cookies.getAll();
        let keys = Object.keys(keyValues);
        let i;
        for (i = 0; i < keys.length; i++) {
            self.remove(keys[i]);
        }
    }

    remove(key) {
        self.localStorage.removeItem(key);
    }
}

export default PermanentPersistenceService;