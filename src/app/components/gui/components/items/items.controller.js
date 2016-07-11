let self;
class ItemsController {
    /*@ngInject*/
    constructor(preScreenLoadingInterceptorsCallerService) {
        self = this;
        preScreenLoadingInterceptorsCallerService.intercept();
        this.rows = this.items;
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