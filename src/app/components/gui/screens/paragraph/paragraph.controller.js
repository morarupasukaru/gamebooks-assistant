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

        this.descriptionEditable = false;
    }

    addRow() {
        let choice = { paragraphNumber : self.inputParagraphNumber, description : self.inputDescription };
        self.paragraph.choices.push(choice);
        self.inputParagraphNumber = '';
        self.inputDescription = '';
        self.addChoice = choice;
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

    editDescription() {
        self.descriptionEditable = true;
        self.originalDescription = self.paragraph.description;
    }

    isDescriptionEditable() {
        return self.descriptionEditable;
    }

    saveDescriptionChanges() {
        self.originalDescription = null;
        self.descriptionEditable = false;
    }

    abortDescriptionChanges() {
        self.paragraph.description = self.originalDescription;
        self.originalDescription = null;
        self.descriptionEditable = false;
    }

    editRow(choice) {
        self.editedChoice = choice;
        self.originalChoice = { paragraphNumber : choice.paragraphNumber, description : choice.description };
    }

    isChoiceEditable(choice) {
        return choice === self.editedChoice || choice === self.addChoice;
    }

    hasEditedChoice() {
        return !!self.editedChoice || !! self.addChoice;
    }

    saveChoiceChanges() {
        self.clearEditedChoice();
    }

    abortChoiceChanges() {
        if (!!self.addChoice) {
            self.removeRow(self.addChoice);
        }
        if (!!self.editedChoice) {
            self.editedChoice.paragraphNumber = self.originalChoice.paragraphNumber;
            self.editedChoice.description = self.originalChoice.description;
        }
        self.clearEditedChoice();
    }

    clearEditedChoice() {
        self.addChoice = null;
        self.editedChoice = null;
        self.originalChoice = null;
    }
}

export default ParagraphController;