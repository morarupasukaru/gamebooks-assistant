class StatsController {
    /*@ngInject*/
    constructor(gamePersistenceService) {
        this.gamePersistenceService = gamePersistenceService;
    }

    increment(row) {
        row.current = row.current + 1;
        this.save();
    }

    decrement(row) {
        row.current = row.current - 1;
        this.save();
    }

    save() {
        let updatedGame = this.gamePersistenceService.getGame(this.gameId);
        updatedGame.stats = this.stats;
        this.gamePersistenceService.updateGame(updatedGame);
    }
}

export default StatsController;