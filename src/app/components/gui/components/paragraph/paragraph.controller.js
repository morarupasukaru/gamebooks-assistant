let self;
class ParagraphController {
    /*@ngInject*/
    constructor(preScreenLoadingInterceptorsCallerService, popupService, constants, gamePersistenceService, bookPersistenceService, $location) {
        self = this;
        preScreenLoadingInterceptorsCallerService.intercept();
        self.popupService = popupService;
        self.constants = constants;
        self.gamePersistenceService = gamePersistenceService;
        self.bookPersistenceService = bookPersistenceService;
        self.$location = $location;

        self.popupDeleteChoiceConfig = {
            id : 'popupDeleteChoice',
            text : 'Are you sure to remove the choice?',
            choices : [constants.choices.yes, constants.choices.no],
            withCloseButton : false,
            closeOnClickOutsideModal : false
        };

        self.initData();
    }

    initData() {
        let game = self.gamePersistenceService.getGame(self.gameId);
        self.bookId = game.bookId;
        self.playerName = game.playerName;
        this.descriptionEditable = false;
        self.alreadyChoosen = self.gamePersistenceService.getChoosenChoices(self.gameId, self.paragraph.paragraphNr);
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
        self.bookPersistenceService.updateParagraph(self.bookId, self.paragraph);
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
        self.bookPersistenceService.updateParagraph(self.bookId, self.paragraph);
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
        self.gamePersistenceService.setCurrentParagraphNrOfGame(self.gameId, self.paragraph.paragraphNr, paragraphNr);
        let nextUrl = self.gamePersistenceService.getUrlOfGame(self.gameId);
        self.$location.url(nextUrl);
    }

    isAlreadyChoosen(choice) {
        return self.alreadyChoosen.indexOf(choice.paragraphNr) !== -1;
    }
}

export default ParagraphController;