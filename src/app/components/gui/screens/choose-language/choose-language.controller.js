class ChooseLanguageController {
    /*@ngInject*/
    constructor(preScreenLoadingInterceptorsCallerService, persistenceService) {
        self = this;
        preScreenLoadingInterceptorsCallerService.intercept();

        // TODO event > language choosen > go next page
    }
}

export default ChooseLanguageController;