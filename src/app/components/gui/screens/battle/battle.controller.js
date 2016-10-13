class BattleController {
    /*@ngInject*/
    constructor(preScreenLoadingInterceptorsCallerService, $window, popupService, constants, gamePersistenceService, adventurePersistenceService, $stateParams) {
        preScreenLoadingInterceptorsCallerService.intercept();
        this.$window = $window;
        this.popupService = popupService;
        this.constants = constants;
        this.$stateParams = $stateParams;
        this.gamePersistenceService = gamePersistenceService;
        this.adventurePersistenceService = adventurePersistenceService;

        this.popupDeleteEnemyConfig = {
            id : 'popupDeleteEnemy',
            text : 'Are you sure to remove the enemy?',
            choices : [constants.choices.yes, constants.choices.no],
            withCloseButton : false,
            closeOnClickOutsideModal : false
        };

        this.initData();
    }

    initData() {
        if (!!this.$stateParams.game) {
            this.game = this.gamePersistenceService.getGame(decodeURIComponent(this.$stateParams.game));
            this.adventure = this.adventurePersistenceService.getAdventure(this.game.adventureId);
        }

        this.initStatsData();
        this.initPlayerStats();
        this.defaultEnemy = this.initDefaultEnemy();
        this.addEnemy();
    }

    initStatsData() {
        if (!!this.game && !!this.adventure) {
            this.stats = [];
            for (let i = 0; i < this.adventure.stats.length; i++) {
                let currentStats = this.adventure.stats[i];
                if (!!currentStats.battle && !!currentStats.battle.displayed) {
                    this.stats.push({ name: currentStats.name, enemyDefaultValue: currentStats.battle.enemyDefaultValue, editableForEnemy: currentStats.battle.editableForEnemy});
                }
            }
        }
    }

    initPlayerStats() {
        if (!!this.stats) {
            this.statsPlayer = { name : this.game.playerName};

            for (let i = 0; i < this.stats.length; i++) {
                let currentStats = this.stats[i];
                for (let j = 0; j < this.game.stats.length; j++) {
                    let currentGameStats = this.game.stats[j];
                    if (currentStats.name === currentGameStats.name) {
                        this.statsPlayer[currentStats.name] = currentGameStats.current;
                        break;
                    }
                }
            }
            this.rows = [ this.statsPlayer ];
        }
    }

    initDefaultEnemy() {
        let defaultEnemyName = 'Enemy';
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

    save() {
        for (let i = 0; i < this.game.stats.length; i++) {
            let currentStats = this.game.stats[i];
            currentStats.current = this.statsPlayer[currentStats.name];
        }
        this.gamePersistenceService.updateGame(this.game);
    }

    displayRemovePopup(removedRow) {
        this.rowToBeRemoved = removedRow;
        let self = this;
        this.popupService.show(
            this.popupDeleteEnemyConfig.id,
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

    isEnemy(row) {
        return this.rows.indexOf(row) !== 0;
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

    isDicesAvailable() {
        return !!this.adventure.toggles.dices;
    }

    isStatsAvailable() {
        return !!this.adventure.toggles.stats;
    }
}

export default BattleController;