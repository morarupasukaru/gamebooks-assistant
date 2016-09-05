class PreScreenLoadingInterceptorsCallerService {

    /*@ngInject*/
    constructor(languageAvailabilityCheckerService, softwareRequirementsCheckerService) {
        this.softwareRequirementsCheckerService = softwareRequirementsCheckerService;
        this.languageAvailabilityCheckerService = languageAvailabilityCheckerService;
    }

    intercept() {
        this.softwareRequirementsCheckerService.checkSoftwareRequirements();
        this.languageAvailabilityCheckerService.selectLanguageIfMissing();
    }

}

export default PreScreenLoadingInterceptorsCallerService;