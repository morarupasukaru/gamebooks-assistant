class ExportController {
    /*@ngInject*/
    constructor(preScreenLoadingInterceptorsCallerService, persistenceService) {
        self = this;
        preScreenLoadingInterceptorsCallerService.intercept();
        this.persistenceService = persistenceService;
    }
}

export default ExportController;