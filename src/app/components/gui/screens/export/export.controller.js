class ExportController {
    /*@ngInject*/
    constructor(softwareRequirementsChecksService, permanentPersistenceService) {
        self = this;
        self.hasSoftwareRequirements = softwareRequirementsChecksService.hasSoftwareRequirements();
        this.persistenceService = permanentPersistenceService;
        this.data = this.persistenceService.get('test');
    }
}

export default ExportController;