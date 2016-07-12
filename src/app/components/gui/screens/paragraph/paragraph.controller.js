let self;
class ParagraphController {
    /*@ngInject*/
    constructor(preScreenLoadingInterceptorsCallerService, popupService, constants) {
        self = this;
        preScreenLoadingInterceptorsCallerService.intercept();
        self.popupService = popupService;
        self.constants = constants;

        self.popupDeleteChoiceConfig = {
            id : 'popupDeleteChoice',
            text : 'Are you sure to remove the choice?',
            choices : [constants.choices.yes, constants.choices.no],
            withCloseButton : false,
            closeOnClickOutsideModal : false
        };

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

    displayRemovePopup(removedRow) {
        self.rowToBeRemoved = removedRow;
        self.popupService.show(self.popupDeleteChoiceConfig.id, self.callbackRemovePopup);
    }

    callbackRemovePopup(popupDomElementId, choice) {
        if (choice === self.constants.choices.yes) {
            self.removeRow(self.rowToBeRemoved);
        }
        self.rowToBeRemoved = null;
    }

    removeRow(removedRow) {
        var index = self.paragraph.choices.indexOf(removedRow);
        self.paragraph.choices.splice(index, 1);
    }
}

export default ParagraphController;