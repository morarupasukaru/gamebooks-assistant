let self;
class SaveScreenUrlInterceptorService {

    /*@ngInject*/
    constructor(persistenceService, $location) {
        self = this;
        self.persistenceService = persistenceService;
        self.$location = $location;
    }

    saveScreenUrl() {
        let currentUrl = self.$location.url();
        if (!!currentUrl && currentUrl !== '/') {
            self.persistenceService.setLastDisplayedScreenUrl(currentUrl);
        }
    }
}

export default SaveScreenUrlInterceptorService;