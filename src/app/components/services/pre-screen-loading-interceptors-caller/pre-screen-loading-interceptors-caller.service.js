let self;
class PreScreenLoadingInterceptorsCallerService {

    /*@ngInject*/
    constructor(languageAvailabilityCheckerService, softwareRequirementsCheckerService) {
        self = this;
        self.softwareRequirementsCheckerService = softwareRequirementsCheckerService;
        self.languageAvailabilityCheckerService = languageAvailabilityCheckerService;
    }

    intercept() {
        self.softwareRequirementsCheckerService.checkSoftwareRequirements();
        self.languageAvailabilityCheckerService.selectLanguageIfMissing();
    }

}

export default PreScreenLoadingInterceptorsCallerService;