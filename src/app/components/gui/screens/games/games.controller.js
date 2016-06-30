let self;
class GamesController {
    /*@ngInject*/
    constructor($location, softwareRequirementsChecksService) {
        self = this;
        self.hasSoftwareRequirements = softwareRequirementsChecksService.hasSoftwareRequirements();
        if (self.hasSoftwareRequirements) {
            self.$location = $location;
            // TODO call game engine, get played
            this.rows = [
                { bookName : 'The Wizard of the firetop mountain', playerName : 'Pascal' },
                { bookName : 'The Wizard of the firetop mountain', playerName : 'Pascal 2nd try', selected : true },
                { bookName : 'The Creature from Chaos', playerName : 'François' }
            ];
        }
    }

    select(row) {
        // TODO call game engine, selected game, following code after promise result
        for (var i = 0; i < self.rows.length; i++) {
            self.rows[i].selected = false;
        }
        row.selected = true;
    }

    startNewGame() {
        self.$location.url('/games/create')
    }
}

export default GamesController;