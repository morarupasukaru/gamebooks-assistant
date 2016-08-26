let self;
class HomeController {

    /*@ngInject*/
    constructor($location, $rootScope, preScreenLoadingInterceptorsCallerService, gamePersistenceService, constants) {
        self = this;
        preScreenLoadingInterceptorsCallerService.intercept();
        self.$location = $location;
        self.gamePersistenceService = gamePersistenceService;

        let lastUrl = self.gamePersistenceService.getLastDisplayedScreenUrl();
        if (!!lastUrl) {
            $location.url(lastUrl);
        } else {
            $location.url(constants.url.games);
        }
    }
}

export default HomeController;