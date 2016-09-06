let ctrl;
class AdventureDetailController {
    /*@ngInject*/
    constructor(preScreenLoadingInterceptorsCallerService, persistenceService, adventurePersistenceService, $stateParams, $location, constants, popupService, messagesService) {
        preScreenLoadingInterceptorsCallerService.intercept();
        ctrl = this;
        this.persistenceService = persistenceService;
        this.adventurePersistenceService = adventurePersistenceService;
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
        let adventureId = encodeURIComponent(this.$stateParams.adventureId);
        if (!!adventureId) {
            if ("create" === adventureId) {
                this.adventure = {
                    stats: [],
                    items: []
                };
            } else {
                this.adventure = this.adventurePersistenceService.getAdventure(adventureId);
            }
        }
    }

    save(form) {
        if (form.$invalid) {
            this.makeFieldsDirty(form);
            return ;
        }

        if (!!this.adventure.items) {
            let modifiedItems = [];
            for (let i = 0; i < this.adventure.items.length; i++) {
                modifiedItems.push({
                    quantity: this.adventure.items[i].quantity,
                    description: this.adventure.items[i].description
                });
            }
            this.adventure.items = modifiedItems;
        }
        try {
            this.adventurePersistenceService.updateAdventureWithoutParagraphs(this.adventure);
            this.$location.url(this.constants.url.adventures);
        } catch (error) {
            this.messagesService.errorMessage(error, false);
        }
    }

    makeFieldsDirty(form) {
        this.messagesService.errorMessage('Please complete mandatory fields', false);
    }


    addRow() {
        let stats = { init: {}, battle: { displayed: true, editableForEnemy: false }};
        this.adventure.stats.push(stats);
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
        var index = this.adventure.stats.indexOf(removedRow);
        this.adventure.stats.splice(index, 1);
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