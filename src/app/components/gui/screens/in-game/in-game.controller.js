let self;
class InGameController {
    /*@ngInject*/
    constructor(preScreenLoadingInterceptorsCallerService, $location, constants, endGamePopupService) {
        self = this;
        preScreenLoadingInterceptorsCallerService.intercept();
        self.$location = $location;
        self.constants = constants;
        self.endGamePopupService = endGamePopupService;
        this.paragraph = {
            paragraphNumber : 1,
            description : 'Start of the game\nStart of the game\nStart of the game\nStart of the game\nStart of the game\nStart of the game\n',
            choices : [
                { paragraphNumber : 123, description : 'East'},
                { paragraphNumber : 65, description : 'West'}
            ]
        };

        self.popupAbandonGameConfig = {
            id : 'popupAbandonGame',
            choices : [constants.choices.yes, constants.choices.no],
            withCloseButton : false,
            closeOnClickOutsideModal : false
        };

        this.notes = [ {note:'note 1'}, {note:'note 2', playerName : 'Pascal'}, {note:'note 3', playerName: 'François', paragraphNumber : 123 } ];
        this.items = [
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
        ];
        this.playerName = 'Donald';
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

    callbackAbandonGamePopup(popupDomElementId, choice) {
        if (choice === self.constants.choices.yes) {
            self.$location.url(self.constants.url.games);
        }
    }
}

export default InGameController;