class BackButtonController {
    /*@ngInject*/
    constructor($window) {
        this.$window = $window;
    }

    isBackDisabled() {
        return this.$window.history.length < 2;
    }

    back() {
        this.$window.history.back();
    }
}

export default BackButtonController;