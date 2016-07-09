let self;
class NotesController {
    /*@ngInject*/
    constructor(preScreenLoadingInterceptorsCallerService) {
        self = this;
        preScreenLoadingInterceptorsCallerService.intercept();
        this.readonly = !!this.readonly;
        this.rows = [];
        if (!!this.notes) {
            let notesValues = this.notes.split(',');
            let i;
            for (i = 0; i < notesValues.length; i++) {
                this.addRow(notesValues[i]);
            }
        }
    }

    addRow(noteValue) {
        if (!!noteValue) {
            self.rows.push({ note : noteValue});
        } else {
            self.rows.push({});
        }
    }

    removeRow(removedRow) {
        var index = self.rows.indexOf(removedRow);
        self.rows.splice(index, 1);
    }
}

export default NotesController;
