class DicesController {
    /*@ngInject*/
    constructor(dicesService) {
        this.dicesService = dicesService;
        this.clear();
    }

    roll2d6() {
        this.appendToResult(this.dicesService.rollDices(2, 6));
    }

    roll1d6() {
        this.appendToResult(this.dicesService.rollDices(1, 6));
    }

    clear() {
        this.dicesValue = '';
    }

    appendToResult(value) {
        if (this.dicesValue !== '') {
            this.dicesValue = this.dicesValue + ','
        }
        this.dicesValue = this.dicesValue + value;
    }

}

export default DicesController;