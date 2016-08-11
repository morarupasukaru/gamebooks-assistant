let self;
class ParagraphController {
    /*@ngInject*/
    constructor(preScreenLoadingInterceptorsCallerService, popupService, constants, persistenceService, $location) {
        self = this;
        preScreenLoadingInterceptorsCallerService.intercept();
        self.popupService = popupService;
        self.constants = constants;
        self.persistenceService = persistenceService;
        self.$location = $location;

        self.popupDeleteChoiceConfig = {
            id : 'popupDeleteChoice',
            text : 'Are you sure to remove the choice?',
            choices : [constants.choices.yes, constants.choices.no],
            withCloseButton : false,
            closeOnClickOutsideModal : false
        };

        this.descriptionEditable = false;
    }

    addRow() {
        let row = { paragraphNr : self.inputParagraphNr, description : self.inputDescription };
        self.paragraph.choices.push(row);
        self.inputParagraphNr = '';
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
        self.saveParagraphChoices();
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
        self.persistenceService.updateParagraph(self.paragraph);
    }

    abortDescriptionChanges() {
        self.paragraph.description = self.originalDescription;
        self.originalDescription = null;
        self.descriptionEditable = false;
    }

    editRow(row) {
        self.editedRow = row;
        self.originalRow = { paragraphNr : row.paragraphNr, description : row.description };
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
        self.saveParagraphChoices();
    }

    saveParagraphChoices() {
        self.persistenceService.updateParagraph(self.paragraph);
    }

    abortRowChanges() {
        if (!!self.addedRow) {
            self.removeRow(self.addedRow);
        }
        if (!!self.editedRow) {
            self.editedRow.paragraphNr = self.originalRow.paragraphNr;
            self.editedRow.description = self.originalRow.description;
        }
        self.clearEditedRow();
    }

    clearEditedRow() {
        self.addedRow = null;
        self.editedRow = null;
        self.originalRow = null;
    }

    goTo(paragraphNr) {
        self.persistenceService.setCurrentParagraphNrOfGame(self.gameId, self.paragraph.paragraphNr, paragraphNr);
        let nextUrl = self.persistenceService.getUrlOfGame(self.gameId);
        self.$location.url(nextUrl);
    }
}

export default ParagraphController;