class ChooseLanguageController {
    /*@ngInject*/
    constructor(preScreenLoadingInterceptorsCallerService, $location, constants) {
        this.$location = $location;
        this.constants = constants;
        preScreenLoadingInterceptorsCallerService.intercept();
    }

    goForward() {
        this.$location.url(this.constants.url.games)
    }
}

export default ChooseLanguageController;