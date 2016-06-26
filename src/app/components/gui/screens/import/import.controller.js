let self;
class ImportController {
    /*@ngInject*/
    constructor(softwareRequirementsChecksService, permanentPersistenceService) {
        self = this;
        self.hasSoftwareRequirements = softwareRequirementsChecksService.hasSoftwareRequirements();
        this.persistenceService = permanentPersistenceService;
        if (self.hasSoftwareRequirements) {
            // TODO
        }
    }

    import() {
        self.persistenceService.save('test', self.data);
    }
}

export default ImportController;