let self;
class InGameController {
    /*@ngInject*/
    constructor(preScreenLoadingInterceptorsCallerService) {
        self = this;
        preScreenLoadingInterceptorsCallerService.intercept();
        this.paragraph = {
            paragraphNumber : 1,
            description : 'Start of the game\nStart of the game\nStart of the game\nStart of the game\nStart of the game\nStart of the game\n',
            choices : [
                { paragraphNumber : 123, description : 'East'},
                { paragraphNumber : 65, description : 'West'}
            ]
        };
        this.notes = [ {note:'note 1'}, {note:'note 2', playerName : 'Pascal'}, {note:'note 3', playerName: 'François' } ];
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
    }

    addRow() {
        self.paragraph.choices.push( { paragraphNumber : self.inputParagraphNumber, description : self.inputDescription });
        self.inputParagraphNumber = '';
        self.inputDescription = '';
    }

    removeRow(removedRow) {
        var index = self.paragraph.choices.indexOf(removedRow);
        self.paragraph.choices.splice(index, 1);
    }
}

export default InGameController;