let self;
class ImportController {
    /*@ngInject*/
    constructor(persistenceService, $rootScope) {
        this.persistenceService = persistenceService;
        self = this;
    }

    import() {
        self.persistenceService.update('test', self.data);
    }
}

export default ImportController;