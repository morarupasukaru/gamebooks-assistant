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

        this.rows = [
            { name: 'Player', skill : 11, stamina : 18 },
            { name: 'Goblin 1', skill : 5, stamina : 5 },
        ];
        self.monsterCount = 1;
        self.inputName = this.getNextMonsterName();
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
    }

    isRemoveAllowed(row) {
        return "Player" !== row.name;
    }

    addRow() {
        self.rows.push({ name: self.inputName, skill: self.inputSkill, stamina: self.inputStamina});
        self.inputName = self.getNextMonsterName();
    }

    getNextMonsterName() {
        return 'Monster ' + self.monsterCount++;
    }

    back() {
        self.$window.history.back();
    }
}

export default BattleController;