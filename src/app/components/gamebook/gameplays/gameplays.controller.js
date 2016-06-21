let self;
class GameplaysController {
    /*@ngInject*/
    constructor() {
        self = this;
        this.rows = [
            { bookName : 'The Wizard of the firetop mountain', playerName : 'Pascal' },
            { bookName : 'The Creature from Chaos', playerName : 'François' },
            { bookName : 'The Wizard of the firetop mountain', playerName : 'Pascal', selected : true }
        ];
    }

    addRow() {
        self.rows.push({ quantity: 1});
    }

    removeRow(removedRow) {
        var index = self.rows.indexOf(removedRow);
        self.rows.splice(index, 1);
    }
}

export default GameplaysController;