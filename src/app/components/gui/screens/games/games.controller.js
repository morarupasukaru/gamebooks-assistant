let self;
class GamesController {
    /*@ngInject*/
    constructor($location, preScreenLoadingInterceptorsCallerService, constants, gamesService) {
        self = this;
        self.constants = constants;
        preScreenLoadingInterceptorsCallerService.intercept();
        self.$location = $location;
        self.gamesService = gamesService;

        self.gamesService.addGame(self.buildGame('warlock-firetop-mountain', 'Pascal', '0'));
        self.gamesService.addGame(self.buildGame('warlock-firetop-mountain', 'Pascal 2nd try', '12'));
        self.gamesService.addGame(self.buildGame('creature-from-chaos', 'François', '187'));

        this.rows = self.gamesService.getGamesAsCopy();
    }


    buildGame(bookUrlName, playerName, paragraphNr) {
        // TODO remove
        let timestamp = new Date().getTime();
        let game = {
            id : timestamp,
            playerName : playerName,
            bookUrlName : bookUrlName,
            currentParagraphNr : paragraphNr
        };
        return game;
    }


    select(row) {
        // TODO call game engine, selected game, following code after promise result
        for (var i = 0; i < self.rows.length; i++) {
            self.rows[i].selected = false;
        }
        row.selected = true;
    }

    startNewGame() {
        self.$location.url(self.constants.url.selectBookForNewGame)
    }

    isContinueAllowed() {
        for (var i = 0; i < self.rows.length; i++) {
            if (!!self.rows[i].selected) {
                return true;
            }
        }
        return false;
    }

    continueGame() {
        self.$location.url(self.constants.url.inGame)
    }
}

export default GamesController;