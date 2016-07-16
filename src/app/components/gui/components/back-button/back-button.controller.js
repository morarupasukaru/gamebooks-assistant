let self;
class BackButtonController {
    /*@ngInject*/
    constructor($windows) {
        self = this;
        self.$windows = $windows;
    }

    isBackDisabled() {
        return self.$window.history.length < 2;
    }

    back() {
        self.$window.history.back();
    }
}

export default BackButtonController;