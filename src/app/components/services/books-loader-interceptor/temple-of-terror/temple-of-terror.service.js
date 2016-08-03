let self;
class TempleOfTerrorService {

    /*@ngInject*/
    constructor(constants) {
        self = this;
        self.book = {
            id : 'temple-terror',
            version : constants.version,
            name : 'The Temple of Terror'
        };
    }

    getBook() {
        return self.book;
    }
}

export default TempleOfTerrorService;