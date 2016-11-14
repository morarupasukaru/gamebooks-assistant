class MapController {
    /*@ngInject*/
    constructor(preScreenLoadingInterceptorsCallerService, $stateParams, mapPersistenceService) {
        preScreenLoadingInterceptorsCallerService.intercept();
        this.$stateParams = $stateParams;
        this.mapPersistenceService = mapPersistenceService;
        this.initData();
    }

    initData() {
        let adventureId = encodeURIComponent(this.$stateParams.adventureId);
        this.rootNode = this.mapPersistenceService.getMap(adventureId);
    }

    /*
                checked: false,
                collapsed: false,
                selected: false
*/
}

export default MapController;