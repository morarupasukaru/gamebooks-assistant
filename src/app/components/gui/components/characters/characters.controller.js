class CharactersController {

    /*@ngInject*/
    constructor(gamePersistenceService, adventurePersistenceService, $translate, $mdDialog) {
        this.gamePersistenceService = gamePersistenceService;
        this.adventurePersistenceService = adventurePersistenceService;
        this.$translate = $translate;
        this.$mdDialog = $mdDialog;
        this.initData();
    }

    initData() {
        let game = this.gamePersistenceService.getGame(decodeURIComponent(this.gameId));
        if (!game.characters) {
            this.characters = [];
        } else {
            this.characters = game.characters;
        }
    }

    addEntry() {
        let character = this.createCharacter(this.newEntry);
        this.characters.push(character);
        this.newEntry = null;
        this.save();
        this.editEntry(character);
    }

    addStats(character) {
        if (!character.stats) {
            character.stats = [];
        }
        character.stats.push({
            name: character.newStats
        });
        this.editEntry(character);
    }

    createCharacter(characterName) {
        let character = {
            name: characterName
        };
        character.stats = [];
        return character;
    }

    editEntry(entry) {
        if (!entry.edited) {
            entry.edited = true;
            entry.originalValues = {};
            this.copyCharacter(entry, entry.originalValues);
        }
    }

    displayRemovePopup(event, removedRow) {
        let confirm = this.$mdDialog.confirm()
              .title(this.$translate.instant('Are you sure to remove the character?'))
              .targetEvent(event)
              .ok(this.$translate.instant('Yes'))
              .cancel(this.$translate.instant('No'));

        this.rowToBeRemoved = removedRow;
        let self = this;
        this.$mdDialog.show(confirm).then(function() {
            self.removeEntry(self.rowToBeRemoved);
            self.rowToBeRemoved = null;
        }, function() {
            // cancel
        });
    }

    removeEntry(entry) {
        let index = this.characters.indexOf(entry);
        this.characters.splice(index, 1);
        this.save();
    }

    removeStats(entry, stats) {
        let index = entry.stats.indexOf(stats);
        entry.stats.splice(index, 1);
    }

    saveChanges(entry, form) {
        if (form.$invalid) {
            return ;
        }
        this.clearEdition(entry);
        this.save();
    }

    abortChanges(entry) {
        this.copyCharacter(entry.originalValues, entry);
        if (!!entry.newStats) {
            let foundIndex = -1;
            for (let i = 0; i < entry.stats.length; i++) {
                if (entry.newStats == entry.stats[i].name) {
                    foundIndex = i;
                    break;
                }
            }
            if (foundIndex !== -1) {
                entry.stats.splice(foundIndex, 1);
            }
        }
        this.clearEdition(entry);
    }

    copyCharacter(src, dest) {
        dest.name = src.name;
        if (!!src.stats) {
            dest.stats = [];
            for (let i = 0; i < src.stats.length; i++) {
                dest.stats.push({
                    name: src.stats[i].name,
                    current: src.stats[i].current,
                    initial: src.stats[i].initial
                });
            }
        }
    }

    clearEdition(entry) {
        delete entry.originalValues;
        delete entry.edited;
        entry.newStats = null;
    }

    increment(stats) {
        stats.current = stats.current + 1;
        this.save();
    }

    decrement(stats) {
        stats.current = stats.current - 1;
        this.save();
    }

    save() {
        let game = this.gamePersistenceService.getGame(decodeURIComponent(this.gameId));
        game.characters = this.characters;
        this.gamePersistenceService.updateGame(game);
    }
}

export default CharactersController;