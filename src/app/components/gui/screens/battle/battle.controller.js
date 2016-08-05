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
        self.persistenceService = persistenceService;

        self.popupDeleteEnemyConfig = {
            id : 'popupDeleteEnemy',
            text : 'Are you sure to remove the enemy?',
            choices : [constants.choices.yes, constants.choices.no],
            withCloseButton : false,
            closeOnClickOutsideModal : false
        };

        if (!!$stateParams.game) {
            self.game = self.persistenceService.getGame(decodeURIComponent($stateParams.game));
        }

        if (!!self.game) {
            this.rows = [
                // TODO get list of displayed stats from book
                { name: self.game.playerName, skill : 11, stamina : 18 }
            ];
            this.addRow();
        }
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

    addRow() {
        // TODO get default enemy name, attribute values from book, list of stats
        let row = { name: self.$translate.instant('Enemy'), skill: 1, stamina: 1};
        self.rows.push(row);
    }

    back() {
        self.$window.history.back();
    }
}

export default BattleController;