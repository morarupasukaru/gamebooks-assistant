let self;
class HomeController {
    constructor($location, $rootScope, softwareRequirementsChecksService, permanentPersistenceService) {
        self = this;
        self.hasSoftwareRequirements = softwareRequirementsChecksService.hasSoftwareRequirements();
        if (self.hasSoftwareRequirements) {
            self.$location = $location;
            self.persistenceService = permanentPersistenceService;

            let lastUrl = self.persistenceService.get('lastUrl');
            if (!!lastUrl) {
                $location.url(lastUrl);
            } else {
                $location.url('/games');
            }

            $rootScope.$on('$locationChangeStart', () => this.saveUrl());
        }
    }

    saveUrl() {
        let currentUrl = self.$location.url();
        if (!!currentUrl && currentUrl !== '/') {
            self.persistenceService.save('lastUrl', currentUrl);
        }
    }
}

export default HomeController;