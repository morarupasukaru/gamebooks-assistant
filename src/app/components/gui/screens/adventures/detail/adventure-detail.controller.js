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
                    toggles: {
                        battle: true,
                        stats: true,
                        dices: true,
                        goto: true,
                        characters: true,
                        map: true
                    }
                };
                this.mode = "create";
            } else {
                this.adventure = this.adventurePersistenceService.getAdventure(adventureId);
                this.mode = "edit";
            }
            if (!this.adventure.lists) {
                this.adventure.lists = { values: {} };
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
        let stats = { init: {}, characters: {}, editableForCharacters : true };
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
        row.editableForCharacters = !!row.characters;
        this.originalRow = {
            name : row.name,
            init: {
                dicesQuantity: row.init.dicesQuantity,
                constants: row.init.constant
            },
            characters : {
                defaultValue: !!row.characters ? row.characters.defaultValue : null
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
        let editedRow = this.getEditRow();
        if (!editedRow.name) {
            return ;
        }
        if (!editedRow.init.dicesQuantity) {
            return ;
        }
        if (!!editedRow.editableForCharacters && !editedRow.characters.defaultValue) {
            return ;
        }
        if (!editedRow.editableForCharacters) {
            delete editedRow.characters;
        }
        delete editedRow.editableForCharacters;
        this.clearEditedRow();
    }

    abortRowChanges() {
        if (!!this.addedRow) {
            this.removeRow(this.addedRow);
        }
        if (!!this.editedRow) {
            this.editedRow.name = this.originalRow.name;
            this.editedRow.init = this.originalRow.init;
            this.editedRow.characters = this.originalRow.characters;
            delete this.editedRow.editableForCharacters;
        }
        this.clearEditedRow();
    }

    clearEditedRow() {
        this.addedRow = null;
        this.editedRow = null;
        this.originalRow = null;
    }

    onListSave(entries) {
        if (!!this.adventure.lists.keys) {
            for (let i = 0; i < this.adventure.lists.keys.length; i++) {
                let key = this.adventure.lists.keys[i];
                if (entries.indexOf(key) === -1) {
                    delete this.adventure.lists.values[key];
                }
            }
        }
        this.adventure.lists.keys = entries;
    }

    onSubListSave(list, entries) {
        this.adventure.lists.values[list] = entries;
    }
}

export default AdventureDetailController;