let self;
class ImportController {
    /*@ngInject*/
    constructor(permanentPersistenceService) {
        this.persistenceService = permanentPersistenceService;
        self = this;
    }

    import() {
        self.persistenceService.save('test', self.data);
    }
}

export default ImportController;