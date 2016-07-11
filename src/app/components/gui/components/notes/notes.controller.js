let self;
class NotesController {
    /*@ngInject*/
    constructor(preScreenLoadingInterceptorsCallerService) {
        self = this;
        preScreenLoadingInterceptorsCallerService.intercept();
        this.readonly = !!this.readonly;
        this.rows = this.notes;
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
