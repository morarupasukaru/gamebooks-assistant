/*
 * Copyright (C) Schweizerische Bundesbahnen SBB, 2016.
 */
class HomeController {
    constructor($location, softwareRequirementsChecksService) {
        self = this;
        self.hasSoftwareRequirements = softwareRequirementsChecksService.hasSoftwareRequirements();
        if (self.hasSoftwareRequirements) {
            $location.url('/gameplays')
        }
    }
}

export default HomeController;