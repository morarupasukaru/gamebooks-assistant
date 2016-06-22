let self;
class DicesController {
    /*@ngInject*/
    constructor() {
        self = this;
        self.clear();
    }

    roll2d6() {
        self._appendToResult(self._roll1d6() + self._roll1d6());
    }

    roll1d6() {
        self._appendToResult(self._roll1d6());
    }

    clear() {
        self.dicesValue = '';
    }

    _roll1d6() {
        return self._getRandomIntInclusive(1, 6);
    }

    _getRandomIntInclusive(min, max) {
      return (Math.floor(Math.random() * (max - min + 1)) + min);
    }

    _appendToResult(value) {
        if (self.dicesValue !== '') {
            self.dicesValue = self.dicesValue + ','
        }
        self.dicesValue = self.dicesValue + value;
    }

}

export default DicesController;