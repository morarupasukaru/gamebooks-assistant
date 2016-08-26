let self;
class StatsController {
    /*@ngInject*/
    constructor(preScreenLoadingInterceptorsCallerService, gamePersistenceService) {
        self = this;
        self.gamePersistenceService = gamePersistenceService;
        preScreenLoadingInterceptorsCallerService.intercept();
    }

    increment(row) {
        row.current = row.current + 1;
        self.save();
    }

    decrement(row) {
        row.current = row.current - 1;
        self.save();
    }

    save() {
        let updatedGame = self.gamePersistenceService.getGame(self.gameId);
        updatedGame.stats = self.stats;
        self.gamePersistenceService.updateGame(updatedGame);
    }
}

export default StatsController;