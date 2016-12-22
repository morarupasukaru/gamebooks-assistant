class CharactersController {

    /*@ngInject*/
    constructor(gamePersistenceService) {
        this.gamePersistenceService = gamePersistenceService;
        this.initData();
    }

    initData() {
        this.game = this.gamePersistenceService.getGame(decodeURIComponent(this.gameId));
        this.innerEntries = [];
        this.innerEntries.push({ value: this.displayValueForPlayer(this.game), deletable : false });
        if (this.game.characters) {
            for (let i = 0; i < this.game.characters.length; i++) {
                this.innerEntries.push({ value: this.displayValueForCharacter(this.game.characters[i]), deletable : true });
            }
        }
    }

    displayValueForPlayer(game) {
        let value = game.playerName;
        if (!!game.stats && game.stats.length > 0) {
            value = value + ' - ';
            for (let i = 0; i < game.stats.length; i++) {
                let stats = game.stats[i];
                let statsValue = stats.name + ' ['+ stats.current + '/' + stats.initial + ']';
                value = value + statsValue;
                if (i < game.stats.length - 1) {
                    value = value + ', ';
                }
            }
        }
        return value;
    }

    displayValueForCharacter(character) {
        let value = character.name;
        let keys  = Object.keys(character);
        keys.splice(keys.indexOf('name'), 1);
        keys.splice(keys.indexOf('$$hashKey$$'), 1);
        if (keys .length > 0) {
            value = value + ' - ';
            for (let i = 0; i < keys.length; i++) {
                let key = keys[i];
                let statsValue = key + ' ['+ character[key] + ']';
                value = value + statsValue;
                if (i < keys.length - 1) {
                    value = value + ', ';
                }
            }
        }
        return value;
    }


    addEntry() {
        this.innerEntries.push({ value: this.newEntry });
        this.newEntry = null;
        this.save();
    }

    editEntry(entry) {
        if (!entry.edited) {
            entry.edited = true;
            entry.originalValue = entry.value;
        }
    }

    removeEntry(entry) {
        let index = this.innerEntries.indexOf(entry);
        this.innerEntries.splice(index, 1);
        this.save();
    }

    saveChanges(entry) {
        this.clearEdition(entry);
        this.save();
    }

    abortChanges(entry) {
        entry.value = entry.originalValue;
        this.clearEdition(entry);
    }

    clearEdition(entry) {
        delete entry.originalValue;
        delete entry.edited;
    }

    save() {
        let entriesValues = [];
        if (!!this.innerEntries) {
            for (let i = 0; i < this.innerEntries.length; i++) {
                entriesValues.push(this.innerEntries[i].value);
            }
        }
        this.onSave({entries : entriesValues });
    }
}

export default CharactersController;