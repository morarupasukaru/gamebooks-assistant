let self;
class GamesController {
    /*@ngInject*/
    constructor($location, preScreenLoadingInterceptorsCallerService, constants, gamesService, booksService) {
        self = this;
        self.constants = constants;
        preScreenLoadingInterceptorsCallerService.intercept();
        self.$location = $location;
        self.gamesService = gamesService;
        self.booksService = booksService;

        self.gamesService.addGame(self.buildGame('warlock-firetop-mountain', 'Pascal', '0'));
        self.gamesService.addGame(self.buildGame('warlock-firetop-mountain', 'Pascal 2nd try', '12'));
        self.gamesService.addGame(self.buildGame('creature-from-chaos', 'François', '187'));

        this.rows = self.gamesService.getGamesAsCopy();
        self.completeBookName(this.rows);
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

    completeBookName(games) {
        for (var i = 0; i < games.length; i++) {
            let book = self.booksService.getBook(games[i].bookUrlName);
            if (!!book) {
                games[i].bookName = book.name;
            } else {
                games[i].bookName = games[i].bookUrlName;
            }
        }
    }

    select(row) {
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