class ExportController {
    /*@ngInject*/
    constructor(dataService) {
        this.dataService = dataService;
        this.data = dataService.get('test');
    }
}

export default ExportController;