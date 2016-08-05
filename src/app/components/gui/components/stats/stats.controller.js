let self;
class StatsController {
    /*@ngInject*/
    constructor(preScreenLoadingInterceptorsCallerService, persistenceService) {
        self = this;
        self.persistenceService = persistenceService;
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
        let updatedGame = self.persistenceService.getGame(self.gameId);
        updatedGame.stats = self.stats;
        self.persistenceService.updateGame(updatedGame);
    }
}

export default StatsController;