let self;
class ImportController {
    /*@ngInject*/
    constructor(dataService, $rootScope) {
        this.dataService = dataService;
        self = this;
    }

    import() {
        self.dataService.update('test', self.data);
    }
}

export default ImportController;