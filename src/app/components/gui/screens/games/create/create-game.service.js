class CreateGameService {

    /*@ngInject*/
    constructor(gamePersistenceService, $location, $stateParams) {
        this.gamePersistenceService = gamePersistenceService;
        this.$location = $location;
        this.$stateParams = $stateParams;
    }

    startGame(adventure, playerName, playerItems, stats) {
        let game = this.buildGame(adventure, playerName, playerItems, stats);
        game = this.gamePersistenceService.addGame(game);
        this.gamePersistenceService.setCurrentParagraphNrOfGame(game.id, null, adventure.startParagraphNr);
        this.$location.url(this.gamePersistenceService.getUrlOfGame(game.id));
    }

    buildGame(adventure, playerName, playerItems, stats) {
        let game = {
            playerName : playerName,
            adventureId : adventure.id
        };
        if (!!playerItems && !!adventure.toggles.items) {
            game.items = JSON.parse(JSON.stringify(playerItems));
        }
        if (!!stats && !!adventure.toggles.stats) {
            game.stats = stats;
        }
        return game;
    }
}

export default CreateGameService;