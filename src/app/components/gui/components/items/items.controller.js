class ItemsController {
    /*@ngInject*/
    constructor(preScreenLoadingInterceptorsCallerService, popupService, constants, gamePersistenceService) {
        preScreenLoadingInterceptorsCallerService.intercept();
        this.rows = this.items;
        this.popupService = popupService;
        this.constants = constants;
        this.gamePersistenceService = gamePersistenceService;

        this.popupDeleteItemConfig = {
            id : 'popupDeleteItem',
            text : 'Are you sure to remove the item?',
            choices : [constants.choices.yes, constants.choices.no],
            withCloseButton : false,
            closeOnClickOutsideModal : false
        };
    }

    addRow() {
        let row = { quantity: 1};
        this.rows.push(row);
        this.addedRow = row;
    }

    displayRemovePopup(removedRow) {
        this.rowToBeRemoved = removedRow;
        let self = this;
        this.popupService.show(
            this.popupDeleteItemConfig.id,
            function(popupDomElementId, choice) {
                if (choice === self.constants.choices.yes) {
                    self.removeRow(self.rowToBeRemoved);
                }
                self.rowToBeRemoved = null;
            }
        );
    }

    removeRow(removedRow) {
        var index = this.rows.indexOf(removedRow);
        this.rows.splice(index, 1);
        this.clearEditedRow();
        this.saveInPersistence();
    }

    editRow(row) {
        this.editedRow = row;
        this.originalRow = { quantity : row.quantity, description : row.description };
    }

    isRowEdited(row) {
        return row === this.editedRow || row === this.addedRow;
    }

    hasEditedRow() {
        return !!this.editedRow || !! this.addedRow;
    }

    saveRowChanges($invalid) {
        if ($invalid) {
            return ;
        }
        this.clearEditedRow();
        this.saveInPersistence();
    }

    abortRowChanges() {
        if (!!this.addedRow) {
            this.removeRow(this.addedRow);
        }
        if (!!this.editedRow) {
            this.editedRow.quantity = this.originalRow.quantity;
            this.editedRow.description = this.originalRow.description;
        }
        this.clearEditedRow();
    }

    clearEditedRow() {
        this.addedRow = null;
        this.editedRow = null;
        this.originalRow = null;
    }

    saveInPersistence() {
        if (!!this.gameId) {
            let updatedGame = this.gamePersistenceService.getGame(this.gameId);
            updatedGame.items = this.items;
            this.gamePersistenceService.updateGame(updatedGame);
        }
    }
}

export default ItemsController;