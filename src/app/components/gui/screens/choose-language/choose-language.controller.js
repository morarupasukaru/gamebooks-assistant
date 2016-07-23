let self;
class ChooseLanguageController {
    /*@ngInject*/
    constructor(preScreenLoadingInterceptorsCallerService, persistenceService, $location, constants) {
        self = this;
        self.$location = $location;
        self.constants = constants;
        preScreenLoadingInterceptorsCallerService.intercept();
    }

    goForward() {
        self.$location.url(self.constants.url.games)
    }
}

export default ChooseLanguageController;