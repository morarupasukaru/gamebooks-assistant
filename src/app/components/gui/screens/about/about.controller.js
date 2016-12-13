class AboutController {
    /*@ngInject*/
    constructor(constants) {
        this.appVersion = constants.version;
    }
}

export default AboutController;