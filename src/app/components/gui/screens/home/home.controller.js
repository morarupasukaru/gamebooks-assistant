/*
 * Copyright (C) Schweizerische Bundesbahnen SBB, 2016.
 */
class HomeController {
    constructor($location, softwareRequirementsChecksService) {
        if (softwareRequirementsChecksService.hasSoftwareRequirements()) {
            $location.url('/gameplays')
        }
    }

    storageAvailable(type) {
    }
}

export default HomeController;