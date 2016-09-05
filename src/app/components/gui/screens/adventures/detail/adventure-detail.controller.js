let ctrl;
class AdventureDetailController {
    /*@ngInject*/
    constructor(preScreenLoadingInterceptorsCallerService, persistenceService, bookPersistenceService, $stateParams, $location, constants, popupService, messagesService) {
        preScreenLoadingInterceptorsCallerService.intercept();
        ctrl = this;
        this.persistenceService = persistenceService;
        this.bookPersistenceService = bookPersistenceService;
        this.$stateParams = $stateParams;
        this.$location = $location;
        this.constants = constants;
        this.popupService = popupService;
        this.messagesService = messagesService;
        this.initData();

        this.popupDeleteStatsConfig = {
            id : 'popupDeleteStats',
            text : 'Are you sure to remove the status?',
            choices : [constants.choices.yes, constants.choices.no],
            withCloseButton : false,
            closeOnClickOutsideModal : false
        };
    }

    initData() {
        let bookId = encodeURIComponent(this.$stateParams.bookId);
        if (!!bookId) {
            if ("create" === bookId) {
                this.book = {
                    stats: [],
                    items: []
                };
            } else {
                this.book = this.bookPersistenceService.getBook(bookId);
            }
        }
    }

    save(form) {
        if (form.$invalid) {
            this.makeFieldsDirty(form);
            return ;
        }

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
        try {
            this.bookPersistenceService.updateBookWithoutParagraphs(this.book);
            this.$location.url(this.constants.url.books);
        } catch (error) {
            this.messagesService.errorMessage(error, false);
        }
    }

    makeFieldsDirty(form) {
        this.messagesService.errorMessage('Please complete mandatory fields', false);
    }


    addRow() {
        let stats = { init: {}, battle: { displayed: true, editableForEnemy: false }};
        this.book.stats.push(stats);
        this.addedRow = stats;
    }

    displayRemovePopup(removedRow) {
        this.rowToBeRemoved = removedRow;
        this.popupService.show(this.popupDeleteStatsConfig.id, this.callbackRemovePopup);
    }

    callbackRemovePopup(popupDomElementId, choice) {
        if (choice === ctrl.constants.choices.yes) {
            ctrl.removeRow(ctrl.rowToBeRemoved);
        }
        ctrl.rowToBeRemoved = null;
    }

    removeRow(removedRow) {
        var index = this.book.stats.indexOf(removedRow);
        this.book.stats.splice(index, 1);
        this.clearEditedRow();
    }

    editRow(row) {
        this.editedRow = row;
        this.originalRow = {
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
        return row === this.editedRow || row === this.addedRow;
    }

    hasEditedRow() {
        return !!this.editedRow || !! this.addedRow;
    }

    getEditRow() {
        if (!!this.addedRow) {
            return this.addedRow;
        } else if (!!this.editedRow) {
            return this.editedRow;
        } else {
            return null;
        }
    }

    saveRowChanges($invalid) {
        if (!this.getEditRow().name) {
            return ;
        }
        if (!this.getEditRow().init.sixDiceQuantity) {
            return ;
        }
        if (!this.getEditRow().battle.editableForEnemy && !!this.getEditRow().battle.enemyDefaultValue) {
            return ;
        }
        this.clearEditedRow();
    }

    abortRowChanges() {
        if (!!this.addedRow) {
            this.removeRow(this.addedRow);
        }
        if (!!this.editedRow) {
            this.editedRow.name = this.originalRow.name;
            this.editedRow.init = this.originalRow.init;
            this.editedRow.battle = this.originalRow.battle;
        }
        this.clearEditedRow();
    }

    clearEditedRow() {
        this.addedRow = null;
        this.editedRow = null;
        this.originalRow = null;
    }
}

export default AdventureDetailController;