class CreateGameService {

    /*@ngInject*/
    constructor(gamePersistenceService, $location, $stateParams) {
        this.gamePersistenceService = gamePersistenceService;
        this.$location = $location;
        this.$stateParams = $stateParams;
    }

    startGame(adventure, playerName, stats) {
        let game = this.buildGame(adventure, playerName, stats);
        game = this.gamePersistenceService.addGame(game);
        this.gamePersistenceService.setCurrentParagraphNrOfGame(game.id, null, adventure.startParagraphId);
        this.$location.url(this.gamePersistenceService.getUrlOfGame(game.id));
    }

    buildGame(adventure, playerName, stats) {
        let game = {
            playerName : playerName,
            adventureId : adventure.id
        };
        if (!!adventure.lists && !!adventure.lists.keys) {
            game.lists = {};
            for (let i = 0; i < adventure.lists.keys.length; i++) {
                game.lists[adventure.lists.keys[i]] = [];
            }

            let keys = Object.keys(adventure.lists.values);
            for (let i = 0; i < keys.length; i++) {
                game.lists[keys[i]] = adventure.lists.values[keys[i]];
            }
        }
        if (!!stats) {
            game.stats = stats;
        }
        return game;
    }
}

export default CreateGameService;