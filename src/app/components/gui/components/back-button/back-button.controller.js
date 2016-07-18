let self;
class BackButtonController {
    /*@ngInject*/
    constructor($window) {
        self = this;
        self.$window = $window;
    }

    isBackDisabled() {
        return self.$window.history.length < 2;
    }

    back() {
        self.$window.history.back();
    }
}

export default BackButtonController;