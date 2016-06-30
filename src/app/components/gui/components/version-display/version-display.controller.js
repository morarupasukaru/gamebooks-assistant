let self;
class VersionDisplayControoller {
    /*@ngInject*/
    constructor(constants) {
        self = this;
        self.appVersion = constants.version;
    }
}

export default VersionDisplayControoller;