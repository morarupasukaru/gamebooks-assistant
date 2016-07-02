let self;
class HomeController {
    constructor($location, $rootScope, preScreenLoadingInterceptorsCallerService, persistenceService) {
        self = this;
        preScreenLoadingInterceptorsCallerService.intercept();
        self.$location = $location;
        self.persistenceService = persistenceService;

        let lastUrl = self.persistenceService.get('lastUrl');
        if (!!lastUrl) {
            $location.url(lastUrl);
        } else {
            $location.url('/games');
        }

        $rootScope.$on('$locationChangeStart', () => this.saveUrl());
    }

    saveUrl() {
        let currentUrl = self.$location.url();
        if (!!currentUrl && currentUrl !== '/') {
            self.persistenceService.save('lastUrl', currentUrl);
        }
    }
}

export default HomeController;