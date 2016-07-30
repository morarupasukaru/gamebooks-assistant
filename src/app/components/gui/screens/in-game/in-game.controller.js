let self;
class InGameController {
    /*@ngInject*/
    constructor(preScreenLoadingInterceptorsCallerService, $location, constants, endGamePopupService, gamesService, $stateParams) {
        self = this;
        preScreenLoadingInterceptorsCallerService.intercept();
        self.$location = $location;
        self.constants = constants;
        self.endGamePopupService = endGamePopupService;
        self.gamesService = gamesService;
        self.$stateParams = $stateParams;
        if (!!$stateParams.game) {
            this.buildGame($stateParams.game);
            self.game = self.gamesService.getGame(decodeURIComponent($stateParams.game));
        }

        this.notes = [];
        this.items = [];
        this.stats = [];

        if (!!self.game) {
            this.playerName = self.game.playerName;
            if (!!self.game.notes) {
                this.notes = this.notes.concat(self.game.notes);
            }
            if (!!self.game.items) {
                this.items = this.items.concat(self.game.items);
            }
            if (!!self.game.stats) {
                this.stats = this.stats.concat(self.game.stats);
            }
        }
        this.paragraph = {
            paragraphNumber : 1,
            description : 'Start of the game\nStart of the game\nStart of the game\nStart of the game\nStart of the game\nStart of the game\n',
            choices : [
                { paragraphNumber : 123, description : 'East'},
                { paragraphNumber : 65, description : 'West'}
            ],
            notes : [ {note:'note 3', playerName: 'François', paragraphNumber : 123 } ]
        };

        if (!!self.paragraph.notes) {
            this.notes = this.notes.concat(self.paragraph.notes);
        }

        self.popupAbandonGameConfig = { id : 'popupAbandonGame' };
    }

    buildGame(gameId) {
        // TODO remove
        let game = {
            id : gameId,
            playerName : 'Pascal',
            bookUrlName : 'warlock-firetop-mountain',
            currentParagraphNr : '0',
            notes : [ {note:'note 1'}, {note:'note 2', playerName : 'Pascal'} ],
            items : [
                        {
                            quantity : 1,
                            description : 'sword'
                        },
                        {
                            quantity : 1,
                            description : 'shield'
                        },
                        {
                            quantity : 1,
                            description : 'leather armour'
                        },
                        {
                            quantity : 1,
                            description : 'backpack'
                        },
                        {
                            quantity : 1,
                            description : 'lantern'
                        },
                        {
                            quantity : 10,
                            description : 'meal (add 4 points to stamina)'
                        },
                        {
                            quantity : 2,
                            description : 'measure of potion of skill (restore skill points)'
                        }
                    ],
            stats : [
                { name : 'Skill', current : 5, initial: 9 },
                { name : 'Stamina', current : 18, initial: 23 },
                { name : 'Luck', current : 7, initial: 9 }
            ]
        };

        self.gamesService.addGame(game);
    }

    startBattle() {
        self.$location.url(self.constants.url.battle)
    }

    jumpToParagraph() {
        self.$location.url(self.constants.url.paragraph + "/" + self.paragraphNumber);
    }

    displayAbandonGamePopup(removedRow) {
        self.endGamePopupService.show(self.popupAbandonGameConfig.id, self.callbackAbandonGamePopup);
    }

    callbackAbandonGamePopup(popupDomElementId, endGameReason) {
        // TODO update game with endGameReason
        self.$location.url(self.constants.url.games);
    }
}

export default InGameController;