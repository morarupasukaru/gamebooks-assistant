let self;
class NotesController {
    /*@ngInject*/
    constructor(preScreenLoadingInterceptorsCallerService) {
        self = this;
        preScreenLoadingInterceptorsCallerService.intercept();
        this.rows = this.notes;
    }

    addRow(noteValue) {
        self.rows.push({ note : noteValue, paragraphNumber : Number(self.paragraphNumber), playerName : self.playerName });
    }

    removeRow(removedRow) {
        var index = self.rows.indexOf(removedRow);
        self.rows.splice(index, 1);
    }
}

export default NotesController;
