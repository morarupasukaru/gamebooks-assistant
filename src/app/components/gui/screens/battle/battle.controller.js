let self;
class BattleController {
    /*@ngInject*/
    constructor(preScreenLoadingInterceptorsCallerService, $window, popupService, constants, $translate, persistenceService, $stateParams) {
        self = this;
        preScreenLoadingInterceptorsCallerService.intercept();
        self.$window = $window;
        self.popupService = popupService;
        self.constants = constants;
        self.$translate = $translate;
        self.$stateParams = $stateParams;
        self.persistenceService = persistenceService;

        self.popupDeleteEnemyConfig = {
            id : 'popupDeleteEnemy',
            text : 'Are you sure to remove the enemy?',
            choices : [constants.choices.yes, constants.choices.no],
            withCloseButton : false,
            closeOnClickOutsideModal : false
        };

        self.initData();
    }

    initData() {
        if (!!self.$stateParams.game) {
            self.game = self.persistenceService.getGame(decodeURIComponent(self.$stateParams.game));
            self.book = self.persistenceService.getBook(self.game.bookId);
        }

        self.initStatsData();
        self.initPlayerStats();
        self.defaultEnemy = self.initDefaultEnemy();
        self.addEnemy();
    }

    initStatsData() {
        if (!!self.game && !!self.book) {
            self.stats = [];
            let i;
            for (i = 0; i < self.book.stats.length; i++) {
                let currentStats = self.book.stats[i];
                if (!!currentStats.battle && !!currentStats.battle.displayed) {
                    self.stats.push({ name: currentStats.name, enemyDefaultValue: currentStats.battle.enemyDefaultValue, editableForEnemy: currentStats.battle.editableForEnemy});
                }
            }
        }
    }

    initPlayerStats() {
        if (!!self.stats) {
            let i;
            let statsPlayer = { name : self.game.playerName};

            for (i = 0; i < self.stats.length; i++) {
                let currentStats = self.stats[i];

                let j;
                for (j = 0; j < self.game.stats.length; j++) {
                    let currentGameStats = self.game.stats[j];
                    if (currentStats.name === currentGameStats.name) {
                        statsPlayer[currentStats.name] = currentGameStats.current;
                        break;
                    }
                }
            }
            this.rows = [ statsPlayer ];
        }
    }

    initDefaultEnemy() {
        let defaultEnemyName = 'Enemy';
        if (!!self.book.defaultEnemyName) {
            defaultEnemyName = self.book.defaultEnemyName;
        }

        let i;
        let statsDefaultEnemy = { name : self.$translate.instant(defaultEnemyName) };

        for (i = 0; i < self.stats.length; i++) {
            let currentStats = self.stats[i];
            statsDefaultEnemy[currentStats.name] = currentStats.enemyDefaultValue;
        }


        return statsDefaultEnemy;
    }

    addEnemy() {
        this.rows.push(JSON.parse(JSON.stringify(self.defaultEnemy)));
    }

    increment(row) {
        row.stamina = row.stamina + 1;
        if (!!self.isEnemy(row)) {
            self.save();
        }
    }

    decrement(row) {
        row.stamina = row.stamina - 1;
        if (!!self.isEnemy(row)) {
            self.save();
        }
    }

    save() {
        // TODO
    }

    displayRemovePopup(removedRow) {
        self.rowToBeRemoved = removedRow;
        self.popupService.show(self.popupDeleteEnemyConfig.id, self.callbackRemovePopup);
    }

    callbackRemovePopup(popupDomElementId, choice) {
        if (choice === self.constants.choices.yes) {
            self.removeRow(self.rowToBeRemoved);
        }
        self.rowToBeRemoved = null;
    }

    removeRow(removedRow) {
        var index = self.rows.indexOf(removedRow);
        self.rows.splice(index, 1);
    }

    isEnemy(row) {
        return self.rows.indexOf(row) !== 0;
    }

    back() {
        self.$window.history.back();
    }
}

export default BattleController;