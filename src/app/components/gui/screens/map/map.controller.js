class MapController {
    /*@ngInject*/
    constructor(preScreenLoadingInterceptorsCallerService, $stateParams, adventurePersistenceService) {
        preScreenLoadingInterceptorsCallerService.intercept();
        this.$stateParams = $stateParams;
        this.adventurePersistenceService = adventurePersistenceService;
        this.initData();
    }

    initData() {
        this.adventureId = encodeURIComponent(this.$stateParams.adventureId);
        let adventure = this.adventurePersistenceService.getAdventure(this.adventureId);
        this.rootParagraphNr = adventure.startParagraphNr;
    }
}

export default MapController;