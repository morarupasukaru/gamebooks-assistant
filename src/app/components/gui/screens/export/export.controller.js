class ExportController {
    /*@ngInject*/
    constructor(permanentPersistenceService) {
        this.persistenceService = permanentPersistenceService;
        this.data = this.persistenceService.get('test');
    }
}

export default ExportController;