let self;
class PreScreenLoadingInterceptorsCallerService {

    /*@ngInject*/
    constructor(languageAvailabilityCheckerService, softwareRequirementsCheckerService, saveScreenUrlInterceptorService, booksLoaderInterceptorService) {
        self = this;
        self.softwareRequirementsCheckerService = softwareRequirementsCheckerService;
        self.languageAvailabilityCheckerService = languageAvailabilityCheckerService;
        self.saveScreenUrlInterceptorService = saveScreenUrlInterceptorService;
        self.booksLoaderInterceptorService = booksLoaderInterceptorService;
    }

    intercept() {
        self.softwareRequirementsCheckerService.checkSoftwareRequirements();
        self.languageAvailabilityCheckerService.selectLanguageIfMissing();
        self.saveScreenUrlInterceptorService.saveScreenUrl();
        self.booksLoaderInterceptorService.loadBooks();
    }

}

export default PreScreenLoadingInterceptorsCallerService;