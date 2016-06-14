let ctrl;
class NotesController {
    /*@ngInject*/
    constructor() {
        ctrl = this;
        ctrl.rows = [
            { note : 'blah blah'}
        ];
    }

    addRow() {
        ctrl.rows.push({ quantity: 1});
    }

    removeRow(removedRow) {
        var index = ctrl.rows.indexOf(removedRow);
        ctrl.rows.splice(index, 1);
    }
}

export default NotesController;
