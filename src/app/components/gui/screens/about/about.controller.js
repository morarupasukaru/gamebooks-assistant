let self;
class AboutController {
    /*@ngInject*/
    constructor(preScreenLoadingInterceptorsCallerService, constants) {
        self = this;
        preScreenLoadingInterceptorsCallerService.intercept();
        self.appVersion = constants.version;
    }
}

export default AboutController;