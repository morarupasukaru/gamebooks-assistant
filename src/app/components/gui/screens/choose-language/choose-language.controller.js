class ChooseLanguageController {
    /*@ngInject*/
    constructor($location, constants) {
        this.$location = $location;
        this.constants = constants;
    }

    goForward() {
        this.$location.url(this.constants.url.games)
    }
}

export default ChooseLanguageController;