class PathsController {
    /*@ngInject*/
    constructor(softwareRequirementsChecksService) {
        self = this;
        self.hasSoftwareRequirements = softwareRequirementsChecksService.hasSoftwareRequirements();
        if (self.hasSoftwareRequirements) {
            // TODO
        }
    }
}

export default PathsController;