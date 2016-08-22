let self;
class GamesController {
    /*@ngInject*/
    constructor($location, preScreenLoadingInterceptorsCallerService, constants, persistenceService, messagesService, $translate) {
        self = this;
        self.constants = constants;
        preScreenLoadingInterceptorsCallerService.intercept();
        self.$location = $location;
        self.persistenceService = persistenceService;
        self.messagesService = messagesService;
        self.$translate = $translate;

        this.initData();
    }

    initData() {
        let gamePersistenceKeys = self.persistenceService.getGamePersistenceKeys();
        self.rows = [];
        for (let i = 0; i < gamePersistenceKeys.length; i++) {
            let game = self.persistenceService.getGame(gamePersistenceKeys[i]);
            self.rows.push(game);
        }

        self.completeBookName(self.rows);
    }

    completeBookName(games) {
        for (let i = 0; i < games.length; i++) {
            let book = self.persistenceService.getBook(games[i].bookId);
            if (!!book) {
                games[i].bookName = book.name;
            } else {
                self.messagesService.errorMessage(self.$translate.instant('Cannot find book') + " '"  + games[i].bookId + "'", false);
                games[i].bookName = games[i].bookId;
            }
        }
    }

    select(row) {
        for (let i = 0; i < self.rows.length; i++) {
            self.rows[i].selected = false;
        }
        row.selected = true;
    }

    startNewGame() {
        self.$location.url(self.constants.url.selectBookForNewGame)
    }

    continueGame() {
        let nextUrl = self.persistenceService.getUrlOfGame(self.getSelectedRow().id);
        self.$location.url(nextUrl);
    }

    isContinueAllowed() {
        return !!self.getSelectedRow();
    }


    getSelectedRow() {
        for (let i = 0; i < self.rows.length; i++) {
            if (!!self.rows[i].selected) {
                return self.rows[i];
            }
        }
        return null;
    }
}

export default GamesController;