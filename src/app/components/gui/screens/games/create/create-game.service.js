class CreateGameService {

    /*@ngInject*/
    constructor(gamePersistenceService, $location, $stateParams) {
        this.gamePersistenceService = gamePersistenceService;
        this.$location = $location;
        this.$stateParams = $stateParams;
    }

    startGame(adventure, playerName, playerItems) {
        let game = this.buildGame(adventure, playerName, playerItems);
        game = this.gamePersistenceService.addGame(game);
        this.gamePersistenceService.setCurrentParagraphNrOfGame(game.id, null, adventure.startParagraphNr);
        this.$location.url(this.gamePersistenceService.getUrlOfGame(game.id));
    }

    buildGame(adventure, playerName, playerItems) {
        let game = {
            playerName : playerName,
            adventureId : adventure.id
        };
        if (!!playerItems) {
            game.items = JSON.parse(JSON.stringify(playerItems));
        }
        let stats = this.getStatsInUrlParam(adventure);
        if (!!stats && stats.length > 0) {
            game.stats = stats;
        }
        return game;
    }

    // TODO bug stats in param? goal of this service?

    getStatsInUrlParam(adventure) {
        let statsParamValue = this.$stateParams['stats'];
        let stats = [];
        if (!!adventure.stats) {
            for (let i = 0; i < adventure.stats.length; i++) {
                let currentStats = adventure.stats[i];
                let startPos = statsParamValue.indexOf(currentStats.name);
                startPos = startPos + currentStats.name.length;
                let endPos = statsParamValue.indexOf(',', startPos);
                let statsValue = statsParamValue.substring(startPos, endPos);
                stats.push({
                        name  : currentStats.name,
                        value : new Number(statsValue)
                    });
            }
        }
        return stats;
    }
}

export default CreateGameService;