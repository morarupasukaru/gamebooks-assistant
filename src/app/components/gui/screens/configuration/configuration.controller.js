class ConfigurationController {
    /*@ngInject*/
    constructor(softwareRequirementsChecksService, permanentPersistenceService) {
        self = this;
        self.hasSoftwareRequirements = softwareRequirementsChecksService.hasSoftwareRequirements();
        if (self.hasSoftwareRequirements) {
            // TODO
        }
    }
}

export default ConfigurationController;