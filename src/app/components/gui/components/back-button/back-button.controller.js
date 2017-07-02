class BackButtonController {
    /*@ngInject*/
    constructor($location) {
        this.$location = $location;
    }

    back() {
        this.$location.url('/games');
    }
}

export default BackButtonController;