let self;
class SaveScreenUrlInterceptorService {

    /*@ngInject*/
    constructor(gamePersistenceService, $location) {
        self = this;
        self.gamePersistenceService = gamePersistenceService;
        self.$location = $location;
    }

    saveScreenUrl() {
        let currentUrl = self.$location.url();
        if (!!currentUrl && currentUrl !== '/') {
            self.gamePersistenceService.setLastDisplayedScreenUrl(currentUrl);
        }
    }
}

export default SaveScreenUrlInterceptorService;