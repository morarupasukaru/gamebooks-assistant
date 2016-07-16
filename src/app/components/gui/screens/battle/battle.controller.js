let self;
class BattleController {
    /*@ngInject*/
    constructor(preScreenLoadingInterceptorsCallerService, $window, popupService, constants) {
        self = this;
        preScreenLoadingInterceptorsCallerService.intercept();
        self.$window = $window;
        self.popupService = popupService;
        self.constants = constants;

        self.popupDeleteEnemyConfig = {
            id : 'popupDeleteEnemy',
            text : 'Are you sure to remove the enemy?',
            choices : [constants.choices.yes, constants.choices.no],
            withCloseButton : false,
            closeOnClickOutsideModal : false
        };

        this.playerName = 'Donald';
        this.rows = [
            { name: self.playerName, skill : 11, stamina : 18 },
            { name: 'Goblin 1', skill : 5, stamina : 5 },
        ];
        self.inputSkill = 5;
        self.inputStamina = 5;
    }

    increment(row) {
        row.stamina = row.stamina + 1;
    }

    decrement(row) {
        row.stamina = row.stamina - 1;
    }

    displayRemovePopup(removedRow) {
        self.rowToBeRemoved = removedRow;
        self.popupService.show(self.popupDeleteEnemyConfig.id, self.callbackRemovePopup);
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

    isEnemy(row) {
        return self.playerName !== row.name;
    }

    addRow() {
        let row = { name: 'Enemy', skill: 1, stamina: 1};
        self.rows.push(row);
        self.addedRow = row;
    }

    back() {
        self.$window.history.back();
    }

    editRow(row) {
        self.editedRow = row;
        self.originalRow = { name : row.name, skill: row.skill, stamina: row.stamina};
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
            self.editedRow.skill = self.originalRow.skill;
            self.editedRow.stamina = self.originalRow.stamina;
        }
        self.clearEditedRow();
    }

    clearEditedRow() {
        self.addedRow = null;
        self.editedRow = null;
        self.originalRow = null;
    }
}

export default BattleController;