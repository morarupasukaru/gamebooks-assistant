class AdventureDetailController {
    /*@ngInject*/
    constructor(persistenceService, adventurePersistenceService, $stateParams, $location, constants, popupService, messagesService, $timeout, $window, formHelperService, $translate, $log) {
        this.persistenceService = persistenceService;
        this.adventurePersistenceService = adventurePersistenceService;
        this.$stateParams = $stateParams;
        this.$location = $location;
        this.constants = constants;
        this.popupService = popupService;
        this.messagesService = messagesService;
        this.$timeout = $timeout;
        this.$window = $window;
        this.formHelperService = formHelperService;
        this.$translate = $translate;
        this.$log = $log;
        this.initData();

        this.popupDeleteStatsConfig = {
            id : 'popupDeleteStats',
            text : 'Are you sure to remove the status?',
            choices : [constants.choices.yes, constants.choices.no],
            withCloseButton : false,
            closeOnClickOutsideModal : false
        };
        this.setInitialFocus();
    }

    initData() {
        let adventureId = encodeURIComponent(this.$stateParams.adventureId);
        if (!!adventureId) {
            if ("create" === adventureId) {
                this.adventure = {
                    stats: [],
                    items: [],
                    toggles: {
                        battle: true,
                        stats: true,
                        notes: true,
                        items: true,
                        dices: true,
                        goto: true
                    }
                };
                this.mode = "create";
            } else {
                this.adventure = this.adventurePersistenceService.getAdventure(adventureId);
                this.mode = "edit";
            }
        }
    }

    setInitialFocus() {
        let that = this;
        this.$timeout(function() {
            let element;
            if (that.mode === "create") {
                element = that.$window.document.getElementById("name");
            } else {
                element = that.$window.document.getElementById("authors");
            }
            if(!!element) {
                element.focus();
            }
        });
    }

    save(form) {
        this.formHelperService.setErrorFieldsAsDirty(form, true);
        if (form.$invalid) {
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
        if (!this.adventure.toggles.stats) {
            delete this.adventure.stats;
        }
        if (!this.adventure.toggles.items) {
            delete this.adventure.items;
        }
        if (!this.adventure.toggles.dices) {
            delete this.adventure.dice;
        }
        try {
            this.adventurePersistenceService.updateAdventureWithoutParagraphs(this.adventure);
            this.$location.url(this.constants.url.adventures);
        } catch (error) {
            this.$log.warn(error);
        }
    }

    addRow() {
        let stats = { init: {}, battle: { displayed: true, editableForEnemy: false }};
        this.adventure.stats.push(stats);
        this.addedRow = stats;
    }

    displayRemovePopup(removedRow) {
        this.rowToBeRemoved = removedRow;
        let self = this;
        this.popupService.show(
            this.popupDeleteStatsConfig.id,
            function(popupDomElementId, choice) {
                if (choice === self.constants.choices.yes) {
                    self.removeRow(self.rowToBeRemoved);
                }
                self.rowToBeRemoved = null;
            }
        );
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
                dicesQuantity: row.init.dicesQuantity,
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
        if (!this.getEditRow().init.dicesQuantity) {
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