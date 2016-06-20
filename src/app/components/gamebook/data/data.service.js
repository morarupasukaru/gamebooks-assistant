let self;

class DataService {

    /*@ngInject*/
    constructor($rootScope) {
        self = this;
        self.$rootScope = $rootScope;
        self.loadFromLocalStorage();
    }

    get(key) {
        return self.$rootScope.data[key];
    }

    update(key, value) {
        self.$rootScope.data[key] = value;
        localStorage.setItem('data', JSON.stringify(self.$rootScope.data));
    }

    exportData() {
        return self.$rootScope.saved;
    }

    loadFromLocalStorage() {
        self.importData(localStorage.getItem('data'));
    }

    importData(data) {
        if (data !== null) {
            self.$rootScope.data = JSON.parse(data);
        } else {
            self.$rootScope.data = {};
        }
        self.$rootScope.saved = JSON.stringify(self.$rootScope.data);
    }
}

export default DataService;