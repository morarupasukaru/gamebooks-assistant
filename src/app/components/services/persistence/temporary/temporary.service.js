let self;

class TemporaryPersistenceService {

    /*@ngInject*/
    constructor($cookies) {
        self = this;
        self.$cookies = $cookies;
    }

    // TODO make cookies work between screen
    // TODO verson?
    // TODO timeout?

    save(key, value) {
        self.$cookies.put(key, JSON.stringify(value));
    }

    get(key) {
        let json = self.$cookies.get(key);
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
        self.$cookies.remove(key);
    }
}

export default TemporaryPersistenceService;