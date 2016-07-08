let self;
class TempleOfTerrorService {

    /*@ngInject*/
    constructor() {
        self = this;
        self.book = {
            name : 'The Temple of Terror'
        };
    }

    getBook() {
        return self.book;
    }
}

export default TempleOfTerrorService;