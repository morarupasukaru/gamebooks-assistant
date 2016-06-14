let ctrl;
class ItemsController {
    /*@ngInject*/
    constructor() {
        ctrl = this;
        ctrl.rows = [
            { quantity : 10, description : 'Meal (regain 4 stamina points)'},
            { quantity : 1, description : 'Sword'},
            { quantity : 1, description : 'Shield'},
            { quantity : 1, description : 'Leather armor'}
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

export default ItemsController;