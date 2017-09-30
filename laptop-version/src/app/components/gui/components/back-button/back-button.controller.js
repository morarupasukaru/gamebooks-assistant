class BackButtonController {
    /*@ngInject*/
    constructor($location, constants) {
        this.$location = $location;
        this.constants = constants;
    }

    back() {
        this.$location.url(this.constants.url.games);
    }
}

export default BackButtonController;