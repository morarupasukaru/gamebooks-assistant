let self;
class GamesController {
    /*@ngInject*/
    constructor($location, preScreenLoadingInterceptorsCallerService, constants, persistenceService, messagesService, $translate, popupService) {
        self = this;
        self.constants = constants;
        preScreenLoadingInterceptorsCallerService.intercept();
        self.$location = $location;
        self.persistenceService = persistenceService;
        self.messagesService = messagesService;
        self.$translate = $translate;
        self.popupService = popupService;

        self.popupDeleteGameConfig = {
            id : 'popupDeleteGame',
            text : 'Are you sure to remove the game?',
            choices : [constants.choices.yes, constants.choices.no],
            withCloseButton : false,
            closeOnClickOutsideModal : false
        };

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

    displayRemoveGamePopup() {
        self.popupService.show(self.popupDeleteGameConfig.id, self.callbackRemovePopup);
    }

    callbackRemovePopup(popupDomElementId, choice) {
        if (choice === self.constants.choices.yes) {
            self.deleteGame();
        }
    }

    deleteGame() {
        self.persistenceService.deleteGame(self.getSelectedRow().id, true, true);
        self.initData();
    }

    hasSelectedRow() {
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