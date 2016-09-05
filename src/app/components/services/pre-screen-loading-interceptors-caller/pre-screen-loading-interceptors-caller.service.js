class PreScreenLoadingInterceptorsCallerService {

    /*@ngInject*/
    constructor(languageAvailabilityCheckerService, softwareRequirementsCheckerService, booksLoaderInterceptorService) {
        this.softwareRequirementsCheckerService = softwareRequirementsCheckerService;
        this.languageAvailabilityCheckerService = languageAvailabilityCheckerService;
        this.booksLoaderInterceptorService = booksLoaderInterceptorService;
    }

    intercept() {
        this.softwareRequirementsCheckerService.checkSoftwareRequirements();
        this.languageAvailabilityCheckerService.selectLanguageIfMissing();
        this.booksLoaderInterceptorService.loadBooks();
    }

}

export default PreScreenLoadingInterceptorsCallerService;