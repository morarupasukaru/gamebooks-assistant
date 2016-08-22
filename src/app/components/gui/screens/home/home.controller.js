let self;
class HomeController {

    /*@ngInject*/
    constructor($location, $rootScope, preScreenLoadingInterceptorsCallerService, persistenceService, constants) {
        self = this;
        preScreenLoadingInterceptorsCallerService.intercept();
        self.$location = $location;
        self.persistenceService = persistenceService;

        let lastUrl = self.persistenceService.getLastDisplayedScreenUrl();
        if (!!lastUrl) {
            $location.url(lastUrl);
        } else {
            $location.url(constants.url.games);
        }
    }
}

export default HomeController;