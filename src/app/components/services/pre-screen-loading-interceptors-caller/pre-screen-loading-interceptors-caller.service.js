class PreScreenLoadingInterceptorsCallerService {

    /*@ngInject*/
    constructor(languageAvailabilityCheckerService, softwareRequirementsCheckerService, predefinedDataLoaderService) {
        this.softwareRequirementsCheckerService = softwareRequirementsCheckerService;
        this.languageAvailabilityCheckerService = languageAvailabilityCheckerService;
        this.predefinedDataLoaderService = predefinedDataLoaderService;
    }

    intercept() {
        this.softwareRequirementsCheckerService.checkSoftwareRequirements();
        this.languageAvailabilityCheckerService.selectLanguageIfMissing();
        this.predefinedDataLoaderService.loadPredefinedData();
    }

}

export default PreScreenLoadingInterceptorsCallerService;