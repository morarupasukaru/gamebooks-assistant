let self;
class ImportController {
    /*@ngInject*/
    constructor(preScreenLoadingInterceptorsCallerService, persistenceService) {
        self = this;
        preScreenLoadingInterceptorsCallerService.intercept();
        this.persistenceService = persistenceService;
    }

    import() {
        self.persistenceService.save('test', self.data);
    }
}

export default ImportController;