class ConfigurationController {
    /*@ngInject*/
    constructor(preScreenLoadingInterceptorsCallerService, permanentPersistenceService) {
        self = this;
        preScreenLoadingInterceptorsCallerService.intercept();
    }
}

export default ConfigurationController;