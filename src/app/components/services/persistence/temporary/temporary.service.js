let self;

class TemporaryPersistenceService {

    /*@ngInject*/
    constructor() {
        self = this;
    }

    save(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    }

    get(key) {
        let json = localStorage.getItem(key);
        if (json !== null && json !== "undefined") {
            return JSON.parse(json);
        } else {
            return null;
        }
    }

    getJson(key) {
        localStorage.getItem(key);
    }
}

export default TemporaryPersistenceService;