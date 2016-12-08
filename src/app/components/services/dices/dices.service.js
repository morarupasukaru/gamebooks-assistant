class DicesService {

    /*@ngInject*/
    constructor() {
    }

    rollDices(qty, minDiceValue, maxDiceValue) {
        let dicesValue = 0;
        for (let i = 0; i < qty; i++) {
            dicesValue = dicesValue + this.randomIntInclusive(minDiceValue, maxDiceValue);
        }
        return dicesValue;
    }

    randomIntInclusive(min, max) {
      return (Math.floor(Math.random() * (max - min + 1)) + min);
    }
}

export default DicesService;