class ListController {

    /*@ngInject*/
    constructor() {
        this.entries = [ { value: 'Notes' }, { value: 'Objets' } ];
    }

    addEntry() {
        this.entries.push({ value: this.newEntry });
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
        let index = this.entries.indexOf(entry);
        this.entries.splice(index, 1);
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
    }
}

export default ListController;