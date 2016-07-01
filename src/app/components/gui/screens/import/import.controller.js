let self;
class ImportController {
    /*@ngInject*/
    constructor(preScreenLoadingInterceptorsCallerService, permanentPersistenceService) {
        self = this;
        preScreenLoadingInterceptorsCallerService.intercept();
        this.persistenceService = permanentPersistenceService;
    }

    import() {
        self.persistenceService.save('test', self.data);
    }
}

export default ImportController;