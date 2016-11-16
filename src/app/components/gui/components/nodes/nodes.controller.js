class NodesController {
    /*@ngInject*/
    constructor(preScreenLoadingInterceptorsCallerService, mapPersistenceService) {
        preScreenLoadingInterceptorsCallerService.intercept();
        this.mapPersistenceService = mapPersistenceService;
        this.initData();
    }

    initData() {
        debugger;
        this.rootNode = this.mapPersistenceService.getMap(this.adventureId);
    }

    /*
                checked: false,
                collapsed: false,
                selected: false
*/
}

export default NodesController;