/*
 * Copyright (C) Schweizerische Bundesbahnen SBB, 2016.
 */
class HomeController {
    constructor($location, softwareRequirementsChecksService, $scope, temporaryPersistenceService) {
        self = this;
        self.hasSoftwareRequirements = softwareRequirementsChecksService.hasSoftwareRequirements();
        if (self.hasSoftwareRequirements) {
            self.persistenceService = temporaryPersistenceService;
            let lastUrl = self.persistenceService.get('lastUrl');

            // TODO service to check null, undefined
            if (!!lastUrl) {
                $location.url(lastUrl);
            } else {
                $location.url('/gameplays');
            }

            // TODO make work event
            $scope.$on('$routeChangeSuccess', function(event) {
                debugger;
                self.persistenceService.save('lastUrl', current);
            });
        }
    }
}

export default HomeController;