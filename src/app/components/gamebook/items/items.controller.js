let ctrl;
class ItemsController {
    /*@ngInject*/
    constructor() {
        ctrl = this;
        ctrl.items = [
            { quantity : 10, description : 'Meal (regain 4 stamina points)'},
            { quantity : 1, description : 'Sword'},
            { quantity : 1, description : 'Shield'},
            { quantity : 1, description : 'Leather armor'}
        ];
    }

    addItem() {
        ctrl.items.push({ quantity: 1});
    }

    removeItem(removedItem) {
        var index = ctrl.items.indexOf(removedItem);
        ctrl.items.splice(index, 1);
    }
}

export default ItemsController;