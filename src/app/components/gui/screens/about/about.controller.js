class AboutController {
    /*@ngInject*/
    constructor(preScreenLoadingInterceptorsCallerService, constants) {
        preScreenLoadingInterceptorsCallerService.intercept();
        this.appVersion = constants.version;
    }
}

export default AboutController;