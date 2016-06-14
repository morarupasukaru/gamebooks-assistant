let ctrl;
class ItemsController {
    /*@ngInject*/
    constructor() {
        ctrl = this;
        ctrl.items = [
            { quantity : 10, name : 'Meal (regain 4 stamina points)'},
            { quantity : 1, name : 'Sword'},
            { quantity : 1, name : 'Shield'},
            { quantity : 1, name : 'Leather armor'}
        ];
    }

    addItem() {
    }
}

export default ItemsController;