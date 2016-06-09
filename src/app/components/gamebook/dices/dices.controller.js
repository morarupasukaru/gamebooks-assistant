let ctrl;
class DicesController {
    /*@ngInject*/
    constructor() {
        ctrl = this;
        ctrl.clear();
    }

    roll2d6() {
        ctrl._appendToResult(ctrl._roll1d6() + ctrl._roll1d6());
    }

    roll1d6() {
        ctrl._appendToResult(ctrl._roll1d6());
    }

    clear() {
        ctrl.dicesValue = '';
    }

    _roll1d6() {
        return ctrl._getRandomIntInclusive(1, 6);
    }

    _getRandomIntInclusive(min, max) {
      return (Math.floor(Math.random() * (max - min + 1)) + min);
    }

    _appendToResult(value) {
        if (ctrl.dicesValue !== '') {
            ctrl.dicesValue = ctrl.dicesValue + ','
        }
        ctrl.dicesValue = ctrl.dicesValue + value;
    }

}

export default DicesController;