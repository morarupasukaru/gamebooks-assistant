let self;
class PreScreenLoadingInterceptorsCallerService {

    /*@ngInject*/
    constructor(languageAvailabilityCheckerService, softwareRequirementsCheckerService, saveScreenUrlInterceptorService) {
        self = this;
        self.softwareRequirementsCheckerService = softwareRequirementsCheckerService;
        self.languageAvailabilityCheckerService = languageAvailabilityCheckerService;
        self.saveScreenUrlInterceptorService = saveScreenUrlInterceptorService;
    }

    intercept() {
        self.softwareRequirementsCheckerService.checkSoftwareRequirements();
        self.languageAvailabilityCheckerService.selectLanguageIfMissing();
        self.saveScreenUrlInterceptorService.saveScreenUrl();
    }

}

export default PreScreenLoadingInterceptorsCallerService;