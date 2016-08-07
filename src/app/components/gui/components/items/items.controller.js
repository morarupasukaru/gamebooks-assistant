let self;
class ItemsController {
    /*@ngInject*/
    constructor(preScreenLoadingInterceptorsCallerService, popupService, constants, persistenceService) {
        self = this;
        preScreenLoadingInterceptorsCallerService.intercept();
        this.rows = this.items;
        self.popupService = popupService;
        self.constants = constants;
        self.persistenceService = persistenceService;

        self.popupDeleteItemConfig = {
            id : 'popupDeleteItem',
            text : 'Are you sure to remove the item?',
            choices : [constants.choices.yes, constants.choices.no],
            withCloseButton : false,
            closeOnClickOutsideModal : false
        };
    }

    addRow() {
        let row = { quantity: 1};
        self.rows.push(row);
        self.addedRow = row;
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
        self.clearEditedRow();
        self.saveInPersistence();
    }

    editRow(row) {
        self.editedRow = row;
        self.originalRow = { quantity : row.quantity, description : row.description };
    }

    isRowEdited(row) {
        return row === self.editedRow || row === self.addedRow;
    }

    hasEditedRow() {
        return !!self.editedRow || !! self.addedRow;
    }

    saveRowChanges($invalid) {
        if ($invalid) {
            return ;
        }
        self.clearEditedRow();
        self.saveInPersistence();
    }

    abortRowChanges() {
        if (!!self.addedRow) {
            self.removeRow(self.addedRow);
        }
        if (!!self.editedRow) {
            self.editedRow.quantity = self.originalRow.quantity;
            self.editedRow.description = self.originalRow.description;
        }
        self.clearEditedRow();
    }

    clearEditedRow() {
        self.addedRow = null;
        self.editedRow = null;
        self.originalRow = null;
    }

    saveInPersistence() {
        if (!!self.gameId) {
            let updatedGame = self.persistenceService.getGame(self.gameId);
            updatedGame.items = self.items;
            self.persistenceService.updateGame(updatedGame);
        }
    }
}

export default ItemsController;