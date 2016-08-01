let self;
class GamesService {

    /*@ngInject*/
    constructor(constants) {
        self = this;
        self.constants = constants;
        self.games = [];
    }

    getGamesAsCopy() {
        return JSON.parse(JSON.stringify(self.games));
    }

    getUrlOfGame(gameId, paragraphNr) {
        let game = self.getGame(gameId);
        if (!paragraphNr) {
            paragraphNr = game.currentParagraphNr;
        }
        let urlOfGame = "/" + encodeURIComponent(game.bookId) + "/" + encodeURIComponent(paragraphNr) + "?" + "game=" + encodeURIComponent(game.id);
        return urlOfGame;
    }

    getGame(gameId) {
        let i;
        for (i = 0; i < self.games.length; i++) {
            if (gameId === self.games[i].id) {
                return self.games[i];
            }
        }
        return null;
    }

    addGame(game) {
        self.games.push(game);
    }
}

export default GamesService;