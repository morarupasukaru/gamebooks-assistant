class NodesController {
    /*@ngInject*/
    constructor(preScreenLoadingInterceptorsCallerService, mapPersistenceService) {
        preScreenLoadingInterceptorsCallerService.intercept();
        this.mapPersistenceService = mapPersistenceService;
        this.initData();
    }

    initData() {
        this.rootNode = this.mapPersistenceService.getMap(this.adventureId, this.rootParagraphNr);
    }

    /*
                checked: false,
                collapsed: false,
                selected: false
*/
}

export default NodesController;