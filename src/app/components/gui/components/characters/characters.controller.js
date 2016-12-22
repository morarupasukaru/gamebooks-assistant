class CharactersController {

    /*@ngInject*/
    constructor(gamePersistenceService) {
        this.gamePersistenceService = gamePersistenceService;
        this.initData();
    }

    initData() {
        this.game = this.gamePersistenceService.getGame(decodeURIComponent(this.gameId));
        this.innerEntries = [];
        this.innerEntries.push({
            value: this.game.playerName,
            stats: this.game.stats,
            deletable : false
        });
        if (this.game.characters) {
            for (let i = 0; i < this.game.characters.length; i++) {
                this.innerEntries.push({
                    value: this.game.characters[i].name,
                    stats: this.game.characters[i],
                    deletable : true
                });
            }
        }
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