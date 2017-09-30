class GoToController {
    /*@ngInject*/
    constructor(gamePersistenceService, adventurePersistenceService, $location) {
        this.gamePersistenceService = gamePersistenceService;
        this.adventurePersistenceService = adventurePersistenceService;
        this.$location = $location;
        this.initData();
    }

    initData() {
        let game = this.gamePersistenceService.getGame(this.gameId);
        let adventure = this.adventurePersistenceService.getAdventure(game.adventureId);
        this.gotoAvailable = !!adventure.toggles.goto;
    }

    goTo(paragraphNr) {
        this.gamePersistenceService.setCurrentParagraphNrOfGame(this.gameId, this.paragraph.paragraphNr, paragraphNr);
        let nextUrl = this.gamePersistenceService.getUrlOfGame(this.gameId);
        this.$location.url(nextUrl);
    }
}

export default GoToController;