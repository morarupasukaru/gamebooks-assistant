class ListController {

    /*@ngInject*/
    constructor() {
        this.innerEntries = [];
        if (!!this.entries) {
            for (let i = 0; i < this.entries.length; i++) {
                this.innerEntries.push({ value: this.entries[i] });
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

export default ListController;