let self;
class NotesController {
    /*@ngInject*/
    constructor() {
        self = this;
        this.rows = [
            { note : 'blah blah'}
        ];
    }

    addRow() {
        self.rows.push({ quantity: 1});
    }

    removeRow(removedRow) {
        var index = self.rows.indexOf(removedRow);
        self.rows.splice(index, 1);
    }
}

export default NotesController;
