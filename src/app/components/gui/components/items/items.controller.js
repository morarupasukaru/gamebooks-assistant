let self;
class ItemsController {
    /*@ngInject*/
    constructor(preScreenLoadingInterceptorsCallerService) {
        self = this;
        preScreenLoadingInterceptorsCallerService.intercept();
        this.rows = [
            { quantity : 10, description : 'Meal (regain 4 stamina points)'},
            { quantity : 1, description : 'Sword'},
            { quantity : 1, description : 'Shield'},
            { quantity : 1, description : 'Leather armor'}
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

export default ItemsController;