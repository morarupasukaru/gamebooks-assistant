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
        let row = { paragraphNumber : self.inputParagraphNumber, description : self.inputDescription };
        self.paragraph.choices.push(row);
        self.inputParagraphNumber = '';
        self.inputDescription = '';
        self.addedRow = row;
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
        self.clearEditedRow();
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

    editRow(row) {
        self.editedRow = row;
        self.originalRow = { paragraphNumber : row.paragraphNumber, description : row.description };
    }

    isRowEdited(row) {
        return row === self.editedRow || row === self.addedRow;
    }

    hasEditedRow() {
        return !!self.editedRow || !! self.addedRow;
    }

    saveRowChanges($invalid) {
        if ($invalid) {
            return ;
        }
        self.clearEditedRow();
    }

    abortRowChanges() {
        if (!!self.addedRow) {
            self.removeRow(self.addedRow);
        }
        if (!!self.editedRow) {
            self.editedRow.paragraphNumber = self.originalRow.paragraphNumber;
            self.editedRow.description = self.originalRow.description;
        }
        self.clearEditedRow();
    }

    clearEditedRow() {
        self.addedRow = null;
        self.editedRow = null;
        self.originalRow = null;
    }
}

export default ParagraphController;