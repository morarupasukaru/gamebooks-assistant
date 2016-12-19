class CharactersController {
    /*@ngInject*/
    constructor($window, popupService, constants, gamePersistenceService, adventurePersistenceService) {
        this.$window = $window;
        this.popupService = popupService;
        this.constants = constants;
        this.gamePersistenceService = gamePersistenceService;
        this.adventurePersistenceService = adventurePersistenceService;
        this.game = this.gamePersistenceService.getGame(decodeURIComponent(this.gameId));
        this.adventure = this.adventurePersistenceService.getAdventure(this.game.adventureId);

        this.popupDeleteCharacterConfig = {
            id : 'popupDeleteCharacter',
            text : 'Are you sure to remove the character?',
            choices : [constants.choices.yes, constants.choices.no],
            withCloseButton : false,
            closeOnClickOutsideModal : false
        };

        this.initData();
    }

    initData() {
        let game = this.gamePersistenceService.getGame(this.gameId);
        if (game.characters) {
            this.rows = game.characters;
        } else {
            this.rows = [];
        }
        this.initStatsData();
        this.defaultCharacter = this.initDefaultCharacter();
    }

    initStatsData() {
        if (!!this.game && !!this.adventure) {
            this.stats = [];
            if (!!this.adventure.stats) {
                for (let i = 0; i < this.adventure.stats.length; i++) {
                    let currentStats = this.adventure.stats[i];
                    if (!!currentStats.characters) {
                        this.stats.push({ name: currentStats.name, value: currentStats.characters.defaultValue });
                    }
                }
            }
        }
    }

    initDefaultCharacter() {
        let defaultCharacterName = 'Character';
        if (!!this.adventure.defaultCharacterName) {
            defaultCharacterName = this.adventure.defaultCharacterName;
        }

        let statsDefaultCharacter = { name : defaultCharacterName };

        for (let i = 0; i < this.stats.length; i++) {
            let currentStats = this.stats[i];
            statsDefaultCharacter[currentStats.name] = currentStats.value;
        }


        return statsDefaultCharacter;
    }

    addCharacter() {
        let newRow = JSON.parse(JSON.stringify(this.defaultCharacter));
        this.rows.push(newRow);
        this.addedRow = newRow;
    }

    displayRemovePopup(removedRow) {
        this.rowToBeRemoved = removedRow;
        let self = this;
        this.popupService.show(
            this.popupDeleteCharacterConfig.id,
            function(popupDomElementId, choice) {
                if (choice === self.constants.choices.yes) {
                    self.removeRow(self.rowToBeRemoved);
                }
                self.rowToBeRemoved = null;
            }
        );
    }

    removeRow(removedRow) {
        var index = this.rows.indexOf(removedRow);
        this.rows.splice(index, 1);
        this.clearEditedRow();
        this.saveInPersistence();
    }

    editRow(row) {
        this.editedRow = row;
        this.originalRow = { name : row.name };
        for (let i = 0; i < this.stats.length; i++) {
            let currentStats = this.stats[i];
            this.originalRow[currentStats.name] = row[currentStats.name];
        }
    }

    isRowEdited(row) {
        return row === this.editedRow || row === this.addedRow;
    }

    hasEditedRow() {
        return !!this.editedRow || !! this.addedRow;
    }

    saveRowChanges($invalid) {
        if ($invalid) {
            return ;
        }
        this.clearEditedRow();
        this.saveInPersistence();
    }

    abortRowChanges() {
        if (!!this.addedRow) {
            this.removeRow(this.addedRow);
        }
        if (!!this.editedRow) {
            this.editedRow.name = this.originalRow.name;
            for (let i = 0; i < this.stats.length; i++) {
                let currentStats = this.stats[i];
                this.editedRow[currentStats.name] = this.originalRow[currentStats.name];
            }
        }
        this.clearEditedRow();
    }

    clearEditedRow() {
        this.addedRow = null;
        this.editedRow = null;
        this.originalRow = null;
    }

    saveInPersistence() {
        if (!!this.gameId) {
            let updatedGame = this.gamePersistenceService.getGame(this.gameId);
            updatedGame.characters = this.rows;
            this.gamePersistenceService.updateGame(updatedGame);
        }
    }

    lastColumnSizeInPercent() {
        let lastColumnSizeInPercent = 55;
        if (!!this.stats && this.isStatsAvailable()) {
            lastColumnSizeInPercent = lastColumnSizeInPercent - (this.stats.length * 10);
        }
        return lastColumnSizeInPercent;
    }

    isStatsAvailable() {
        return !!this.adventure.toggles.stats;
    }

    back() {
        this.$window.history.back();
    }
}

export default CharactersController;