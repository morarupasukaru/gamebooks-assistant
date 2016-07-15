let self;
class NotesController {
    /*@ngInject*/
    constructor(preScreenLoadingInterceptorsCallerService, popupService, constants) {
        self = this;
        preScreenLoadingInterceptorsCallerService.intercept();

        self.popupService = popupService;
        self.constants = constants;

        self.popupDeleteNoteConfig = {
            id : 'popupDeleteNoteConfig',
            text : 'Are you sure to remove the note?',
            choices : [constants.choices.yes, constants.choices.no],
            withCloseButton : false,
            closeOnClickOutsideModal : false
        };

        this.rows = this.notes;
    }

    addRow(noteValue) {
        let row = { note : noteValue, paragraphNumber : Number(self.paragraphNumber), playerName : self.playerName };
        self.rows.push(row);
        self.addedRow = row;
    }

    displayRemovePopup(removedRow) {
        self.rowToBeRemoved = removedRow;
        self.popupService.show(self.popupDeleteNoteConfig.id, self.callbackRemovePopup);
    }

    callbackRemovePopup(popupDomElementId, choice) {
        if (choice === self.constants.choices.yes) {
            self.removeRow(self.rowToBeRemoved);
        }
        self.rowToBeRemoved = null;
    }

    removeRow(removedRow) {
        var index = self.rows.indexOf(removedRow);
        self.rows.splice(index, 1);
        self.clearEditedRow();
    }

    editRow(row) {
        self.editedRow = row;
        self.originalRow = { note : row.note, paragraphNumber : row.paragraphNumber, playerName : row.playerName };
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
            self.editedRow.note = self.originalRow.note;
            self.editedRow.paragraphNumber = self.originalRow.paragraphNumber;
            self.editedRow.playerName = self.originalRow.playerName;
        }
        self.clearEditedRow();
    }

    clearEditedRow() {
        self.addedRow = null;
        self.editedRow = null;
        self.originalRow = null;
    }
}

export default NotesController;
