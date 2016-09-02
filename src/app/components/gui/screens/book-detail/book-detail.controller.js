let ctrl;
class BookDetailController {
    /*@ngInject*/
    constructor(preScreenLoadingInterceptorsCallerService, persistenceService, bookPersistenceService, $stateParams, $location, constants) {
        preScreenLoadingInterceptorsCallerService.intercept();
        ctrl = this;
        this.persistenceService = persistenceService;
        this.bookPersistenceService = bookPersistenceService;
        this.$stateParams = $stateParams;
        this.$location = $location;
        this.constants = constants;
        this.initData();

        self.popupDeleteStatsConfig = {
            id : 'popupDeleteStats',
            text : 'Are you sure to remove the status?',
            choices : [constants.choices.yes, constants.choices.no],
            withCloseButton : false,
            closeOnClickOutsideModal : false
        };
    }

    initData() {
        let bookId = this.$stateParams.bookId;
        if (!!bookId) {
            if ("create" === bookId) {
                this.book = {};
            } else {
                this.book = this.bookPersistenceService.getBook(bookId);
            }
        }
    }

    save() {
        if (!!this.book.items) {
            let modifiedItems = [];
            for (let i = 0; i < this.book.items.length; i++) {
                modifiedItems.push({
                    quantity: this.book.items[i].quantity,
                    description: this.book.items[i].description
                });
            }
            this.book.items = modifiedItems;
        }
        this.bookPersistenceService.updateBookWithoutParagraphs(this.book);
        this.$location.url(this.constants.url.books);
    }


    addRow() {
        let row = { init: {}, battle: {}};
        self.rows.push(row);
        self.addedRow = row;
    }

    displayRemovePopup(removedRow) {
        self.rowToBeRemoved = removedRow;
        self.popupService.show(self.popupDeleteStatsConfig.id, self.callbackRemovePopup);
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
    }

    editRow(row) {
        self.editedRow = row;
        self.originalRow = {
            name : row.name,
            init: {
                sixDiceQuantity: row.init.sixDiceQuantity,
                constants: row.init.constant
            },
            battle: {
                displayed: row.battle.displayed,
                enemyDefaultValue: row.battle.enemyDefaultValue,
                editableForEnemy: row.battle.editableForEnemy,
            }
        };
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
    }

    abortRowChanges() {
        if (!!self.addedRow) {
            self.removeRow(self.addedRow);
        }
        if (!!self.editedRow) {
            self.editedRow.name = self.originalRow.name;
            self.editedRow.init = self.originalRow.init;
            self.editedRow.battle = self.originalRow.battle;
        }
        self.clearEditedRow();
    }

    clearEditedRow() {
        self.addedRow = null;
        self.editedRow = null;
        self.originalRow = null;
    }
}

export default BookDetailController;