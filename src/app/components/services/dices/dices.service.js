let self;
class DicesService {

    /*@ngInject*/
    constructor() {
        self = this;
    }

    rollDices(qty, maxDiceValue) {
        let i;
        let dicesValue = 0;
        for (i = 0; i < qty; i++) {
            dicesValue = dicesValue + self.randomIntInclusive(1, maxDiceValue);
        }
        return dicesValue;
    }

    randomIntInclusive(min, max) {
      return (Math.floor(Math.random() * (max - min + 1)) + min);
    }
}

export default DicesService;