let self;
class GamesController {
    /*@ngInject*/
    constructor($location, preScreenLoadingInterceptorsCallerService, constants) {
        self = this;
        self.constants = constants;
        preScreenLoadingInterceptorsCallerService.intercept();
        self.$location = $location;
        // TODO call game engine, get played
        this.rows = [
            { bookName : 'The Wizard of the firetop mountain', playerName : 'Pascal', currentParagraph : 'Start' },
            { bookName : 'The Wizard of the firetop mountain', playerName : 'Pascal 2nd try', currentParagraph : '§12', selected : true },
            { bookName : 'The Creature from Chaos', playerName : 'François', currentParagraph : '§187' }
        ];
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