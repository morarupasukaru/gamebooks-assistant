let self;
class ImportController {
    /*@ngInject*/
    constructor(softwareRequirementsChecksService, permanentPersistenceService) {
        self = this;
        self.hasSoftwareRequirements = softwareRequirementsChecksService.hasSoftwareRequirements();
        this.persistenceService = permanentPersistenceService;
    }

    import() {
        self.persistenceService.save('test', self.data);
    }
}

export default ImportController;