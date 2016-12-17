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
        this.rows = [];
        this.initStatsData();
        this.defaultEnemy = this.initDefaultEnemy();
        this.addEnemy();
    }

    initStatsData() {
        if (!!this.game && !!this.adventure) {
            this.stats = [];
            for (let i = 0; i < this.adventure.stats.length; i++) {
                let currentStats = this.adventure.stats[i];
                if (!!currentStats.battle && !!currentStats.battle.displayed && !!currentStats.battle.editableForEnemy) {
                    this.stats.push({ name: currentStats.name, enemyDefaultValue: currentStats.battle.enemyDefaultValue, editableForEnemy: currentStats.battle.editableForEnemy});
                }
            }
        }
    }

    initDefaultEnemy() {
        let defaultEnemyName = 'Character';
        if (!!this.adventure.defaultEnemyName) {
            defaultEnemyName = this.adventure.defaultEnemyName;
        }

        let statsDefaultEnemy = { name : defaultEnemyName };

        for (let i = 0; i < this.stats.length; i++) {
            let currentStats = this.stats[i];
            statsDefaultEnemy[currentStats.name] = currentStats.enemyDefaultValue;
        }


        return statsDefaultEnemy;
    }

    addEnemy() {
        this.rows.push(JSON.parse(JSON.stringify(this.defaultEnemy)));
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
    }

    lastColumnSizeInPercent() {
        let lastColumnSizeInPercent = 75;
        if (!!this.stats && this.isStatsAvailable()) {
            lastColumnSizeInPercent = lastColumnSizeInPercent - (this.stats.length * 10);
        }
        return lastColumnSizeInPercent;
    }

    back() {
        this.$window.history.back();
    }

    isStatsAvailable() {
        return !!this.adventure.toggles.stats;
    }
}

export default CharactersController;