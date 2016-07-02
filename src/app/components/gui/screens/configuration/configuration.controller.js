class ConfigurationController {
    /*@ngInject*/
    constructor(preScreenLoadingInterceptorsCallerService, persistenceService) {
        self = this;
        preScreenLoadingInterceptorsCallerService.intercept();
    }
}

export default ConfigurationController;