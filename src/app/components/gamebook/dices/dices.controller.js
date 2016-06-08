let ctrl;
class DicesController {
    /*@ngInject*/
    constructor() {
        ctrl = this;
    }

    roll1d6() {
        alert('roll 1D6');
    }

    roll2d6() {
        alert('roll 2D6');
    }
}

export default DicesController;