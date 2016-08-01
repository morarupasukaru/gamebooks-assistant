let self;
class ConfigurationController {
    /*@ngInject*/
    constructor(preScreenLoadingInterceptorsCallerService) {
        self = this;
        preScreenLoadingInterceptorsCallerService.intercept();
    }
}

export default ConfigurationController;