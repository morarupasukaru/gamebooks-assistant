class ExportController {
    /*@ngInject*/
    constructor(persistenceService) {
        this.persistenceService = persistenceService;
        this.data = persistenceService.get('test');
    }
}

export default ExportController;