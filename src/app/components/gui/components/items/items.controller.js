let self;
class ItemsController {
    /*@ngInject*/
    constructor(preScreenLoadingInterceptorsCallerService, popupService, constants) {
        self = this;
        preScreenLoadingInterceptorsCallerService.intercept();
        this.rows = this.items;
        self.popupService = popupService;
        self.constants = constants;

        self.popupDeleteItemConfig = {
            id : 'popupDeleteItem',
            text : 'Are you sure to remove the item?',
            choices : [constants.choices.yes, constants.choices.no],
            withCloseButton : false,
            closeOnClickOutsideModal : false
        };
    }

    addRow() {
        self.rows.push({ quantity: 1});
    }

    displayRemovePopup(removedRow) {
        self.rowToBeRemoved = removedRow;
        self.popupService.show(self.popupDeleteItemConfig.id, self.callbackRemovePopup);
    }

    callbackRemovePopup(popupDomElementId, choice) {
        if (choice === self.constants.choices.yes) {
            self.removeRow(self.rowToBeRemoved);
        }
        self.rowToBeRemoved = null;
    }

    removeRow(removedRow) {
        var index = self.rows.indexOf(removedRow);
        self.rows.splice(index, 1);
    }
}

export default ItemsController;