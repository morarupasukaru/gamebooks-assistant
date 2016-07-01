class ChooseLanguageController {
    /*@ngInject*/
    constructor(preScreenLoadingInterceptorsCallerService, permanentPersistenceService) {
        self = this;
        preScreenLoadingInterceptorsCallerService.intercept();

        // TODO event > language choosen > go next page
    }
}

export default ChooseLanguageController;