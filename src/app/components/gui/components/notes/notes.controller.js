let self;
class NotesController {
    /*@ngInject*/
    constructor(preScreenLoadingInterceptorsCallerService, popupService, constants, persistenceService, $translate) {
        self = this;
        preScreenLoadingInterceptorsCallerService.intercept();

        self.popupService = popupService;
        self.constants = constants;
        self.persistenceService = persistenceService;
        self.$translate = $translate;

        self.popupDeleteNoteConfig = {
            id : 'popupDeleteNoteConfig',
            text : 'Are you sure to remove the note?',
            choices : [constants.choices.yes, constants.choices.no],
            withCloseButton : false,
            closeOnClickOutsideModal : false
        };

        self.initData();
    }

    initData() {
        let game;
        if (!!self.gameId) {
            game = self.persistenceService.getGame(self.gameId);
        }

        self.notes = [];
        let paragraph = self.persistenceService.getParagraph(self.bookId, self.paragraphNr);
        if (!!paragraph && !!paragraph.notes) {
            let i;
            for (i = 0; i < paragraph.notes.length; i++) {
                if (!!paragraph.notes[i].playerName || !game) {
                    self.notes.push({
                        note : paragraph.notes[i].note,
                        paragraphNr : self.paragraphNr,
                        readonly : false
                    });
                } else {
                    self.notes.push({
                        note : self.$translate.instant(paragraph.notes[i].note),
                        paragraphNr : self.paragraphNr,
                        readonly : true
                    });
                }
            }
        }

        if (!!game) {
            self.playerName = game.playerName;
            if (!!game.notes) {
                self.notes = self.notes.concat(game.notes);
            }
        }
    }

    addRow(noteValue) {
        let row = { note : noteValue, isParagraph : true, playerName : self.playerName };
        self.notes.push(row);
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
        var index = self.notes.indexOf(removedRow);
        self.notes.splice(index, 1);
        self.clearEditedRow();
        self.saveNotes();
    }

    editRow(row) {
        self.editedRow = row;
        self.originalRow = { note : row.note, paragraphNr : row.paragraphNr, playerName : row.playerName };
    }

    isRowEdited(row) {
        return row === self.editedRow || row === self.addedRow;
    }

    hasEditedRow() {
        return !!self.editedRow || !! self.addedRow;
    }

    saveRowChanges($invalid, row) {
        if ($invalid) {
            return ;
        }

        if (!!row.isParagraph) {
            row.paragraphNr = Number(self.paragraphNr);
        } else {
            row.paragraphNr = undefined;
        }

        self.clearEditedRow();
        self.saveNotes();
    }

    saveNotes() {
        self.savePlayerNotes();
        self.saveParagraphNotes();
    }

    savePlayerNotes() {
        if (!self.gameId) {
            return ;
        }

        let savedNotes = [];
        let i;
        for (i = 0; i < self.notes.length; i++) {
            if (!self.notes[i].paragraphNr) {
                savedNotes.push(self.notes[i]);
            }
        }
        let game = self.persistenceService.getGame(self.gameId);
        game.notes = savedNotes;
        self.persistenceService.updateGame(game);
    }

    saveParagraphNotes() {
        // TODO
    }

    abortRowChanges() {
        if (!!self.addedRow) {
            self.removeRow(self.addedRow);
        }
        if (!!self.editedRow) {
            self.editedRow.note = self.originalRow.note;
            self.editedRow.paragraphNr = self.originalRow.paragraphNr;
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
