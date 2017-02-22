class CharactersController {

    /*@ngInject*/
    constructor(gamePersistenceService, adventurePersistenceService, popupService, constants) {
        this.gamePersistenceService = gamePersistenceService;
        this.adventurePersistenceService = adventurePersistenceService;
        this.popupService = popupService;
        this.constants = constants;
        this.initData();

        this.popupDeleteCharacterConfig = {
            id : 'popupDeleteCharacter',
            text : 'Are you sure to remove the character?',
            choices : [constants.choices.yes, constants.choices.no]
        };
    }

    initData() {
        let game = this.gamePersistenceService.getGame(decodeURIComponent(this.gameId));
        if (!game.characters) {
            this.characters = [];
        } else {
            this.characters = game.characters;
        }

        let adventure = this.adventurePersistenceService.getAdventure(game.adventureId);
        this.defaultCharacterStats = {};
        for (let i = 0; i < adventure.stats.length; i++) {
            let currentStats = adventure.stats[i];
            if (!!currentStats.characters) {
                this.defaultCharacterStats[currentStats.name] = currentStats.characters.defaultValue;
            }
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
        character.stats.push({
            name: this.newStats
        });
        this.editEntry(character);
    }

    createCharacter(characterName) {
        let character = {
            name: characterName,
            deletable: true
        };
        character.stats = [];
        let keys = Object.keys(this.defaultCharacterStats);
        for (let i = 0; i < keys.length; i++) {
            character.stats.push({
                name: keys[i],
                current: this.defaultCharacterStats[keys[i]],
                initial: this.defaultCharacterStats[keys[i]]
            });
        }
        return character;
    }

    editEntry(entry) {
        if (!entry.edited) {
            entry.edited = true;
            entry.originalValues = {};
            this.copyCharacter(entry, entry.originalValues);
        }
    }

    displayRemovePopup(removedRow) {
        this.rowToBeRemoved = removedRow;
        let self = this;
        this.popupService.show(
            this.popupDeleteCharacterConfig.id,
            function(popupDomElementId, choice) {
                if (choice === self.constants.choices.yes) {
                    self.removeEntry(self.rowToBeRemoved);
                }
                self.rowToBeRemoved = null;
            }
        );
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
        if (!!this.newStats) {
            let foundIndex = -1;
            for (let i = 0; i < entry.stats.length; i++) {
                if (this.newStats == entry.stats[i].name) {
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
        dest.stats = [];
        for (let i = 0; i < src.stats.length; i++) {
            dest.stats.push({
                name: src.stats[i].name,
                current: src.stats[i].current,
                initial: src.stats[i].initial
            });
        }
    }

    clearEdition(entry) {
        delete entry.originalValues;
        delete entry.edited;
        this.newStats = null;
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