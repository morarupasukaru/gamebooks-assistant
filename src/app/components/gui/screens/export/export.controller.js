class ExportController {
    /*@ngInject*/
    constructor(preScreenLoadingInterceptorsCallerService, permanentPersistenceService) {
        self = this;
        preScreenLoadingInterceptorsCallerService.intercept();
        this.persistenceService = permanentPersistenceService;
    }
}

export default ExportController;