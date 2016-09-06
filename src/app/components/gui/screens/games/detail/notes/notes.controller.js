class NotesController {
    /*@ngInject*/
    constructor(preScreenLoadingInterceptorsCallerService, popupService, constants, gamePersistenceService, adventurePersistenceService) {
        preScreenLoadingInterceptorsCallerService.intercept();

        this.popupService = popupService;
        this.constants = constants;
        this.gamePersistenceService = gamePersistenceService;
        this.adventurePersistenceService = adventurePersistenceService;

        this.popupDeleteNoteConfig = {
            id : 'popupDeleteNoteConfig',
            text : 'Are you sure to remove the note?',
            choices : [constants.choices.yes, constants.choices.no],
            withCloseButton : false,
            closeOnClickOutsideModal : false
        };

        this.initData();
    }

    initData() {
        let game;
        if (!!this.gameId) {
            game = this.gamePersistenceService.getGame(this.gameId);
        }

        this.notes = [];
        let paragraph = this.adventurePersistenceService.getParagraph(this.adventureId, this.paragraphNr);
        if (!!paragraph && !!paragraph.notes) {
            for (let i = 0; i < paragraph.notes.length; i++) {
                this.notes.push(paragraph.notes[i]);
                paragraph.notes[i].paragraphNr = this.paragraphNr;
                paragraph.notes[i].isParagraph = !!paragraph.notes[i].paragraphNr;
                if (!paragraph.notes[i].playerName) {
                    paragraph.notes[i].note = paragraph.notes[i].note;
                }
            }
        }

        if (!!game) {
            this.playerName = game.playerName;
            if (!!game.notes) {
                this.notes = this.notes.concat(game.notes);
            }
        }
    }

    addRow(noteValue) {
        let row = { note : noteValue, isParagraph : true, paragraphNr: this.paragraphNr, playerName : this.playerName };
        this.notes.push(row);
        this.addedRow = row;
    }

    displayRemovePopup(removedRow) {
        this.rowToBeRemoved = removedRow;
        let self = this;
        this.popupService.show(
            this.popupDeleteNoteConfig.id,
            function(popupDomElementId, choice) {
                if (choice === self.constants.choices.yes) {
                    self.removeRow(self.rowToBeRemoved);
                }
                self.rowToBeRemoved = null;
            }
        );
    }

    removeRow(removedRow) {
        var index = this.notes.indexOf(removedRow);
        this.notes.splice(index, 1);
        this.clearEditedRow();
        this.saveNotes();
    }

    editRow(row) {
        this.editedRow = row;
        this.originalRow = { note : row.note, paragraphNr : row.paragraphNr, playerName : row.playerName };
    }

    isRowEdited(row) {
        return row === this.editedRow || row === this.addedRow;
    }

    hasEditedRow() {
        return !!this.editedRow || !! this.addedRow;
    }

    saveRowChanges($invalid, row) {
        if ($invalid) {
            return ;
        }

        if (!!row.isParagraph) {
            row.paragraphNr = Number(this.paragraphNr);
        } else {
            row.paragraphNr = undefined;
        }

        this.clearEditedRow();
        this.saveNotes();
    }

    saveNotes() {
        this.savePlayerNotes();
        this.saveParagraphNotes();
    }

    savePlayerNotes() {
        if (!this.gameId) {
            return ;
        }

        let savedNotes = [];
        for (let i = 0; i < this.notes.length; i++) {
            if (!this.notes[i].paragraphNr) {
                savedNotes.push({ note : this.notes[i].note, playerName : this.notes[i].playerName});
            }
        }
        let game = this.gamePersistenceService.getGame(this.gameId);
        game.notes = savedNotes;
        this.gamePersistenceService.updateGame(game);
    }

    saveParagraphNotes() {
        let savedNotes = [];
        for (let i = 0; i < this.notes.length; i++) {
            if (!!this.notes[i].paragraphNr) {
                savedNotes.push({ note : this.notes[i].note, playerName : this.notes[i].playerName});
            }
        }
        let paragraph = this.adventurePersistenceService.getParagraph(this.adventureId, this.paragraphNr);
        paragraph.notes = savedNotes;
        this.adventurePersistenceService.updateParagraph(this.adventureId, paragraph);
    }

    abortRowChanges() {
        if (!!this.addedRow) {
            this.removeRow(this.addedRow);
        }
        if (!!this.editedRow) {
            this.editedRow.note = this.originalRow.note;
            this.editedRow.paragraphNr = this.originalRow.paragraphNr;
            this.editedRow.playerName = this.originalRow.playerName;
        }
        this.clearEditedRow();
    }

    clearEditedRow() {
        this.addedRow = null;
        this.editedRow = null;
        this.originalRow = null;
    }
}

export default NotesController;
