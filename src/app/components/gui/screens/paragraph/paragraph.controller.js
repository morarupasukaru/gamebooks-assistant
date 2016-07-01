let self;
class ParagraphController {
    /*@ngInject*/
    constructor(preScreenLoadingInterceptorsCallerService) {
        self = this;
        preScreenLoadingInterceptorsCallerService.intercept();
        this.paragraph = {
            paragraphNumber : 1,
            description : 'Start of the game',
            choices : [
                { paragraphNumber : 123, description : 'East'},
                { paragraphNumber : 65, description : 'West'}
            ]
        };
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

export default ParagraphController;