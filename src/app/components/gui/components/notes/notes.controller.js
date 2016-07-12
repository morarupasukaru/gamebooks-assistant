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
        self.rows.push({ note : noteValue, paragraphNumber : Number(self.paragraphNumber), playerName : self.playerName });
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
    }
}

export default NotesController;
