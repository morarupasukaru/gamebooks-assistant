class BattleController {
    /*@ngInject*/
    constructor() {
        self = this;
        this.rows = [
            { name: 'Player', skill : 11, stamina : 18 },
            { name: 'Goblin 1', skill : 5, stamina : 5 },
        ];
        self.inputName = 'Monster';
        self.inputSkill = 5;
        self.inputStamina = 5;
    }

    increment(row) {
        row.stamina = row.stamina + 1;
    }

    decrement(row) {
        row.stamina = row.stamina - 1;
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
    }
}

export default BattleController;