let self;
class CreatureFromHavocService {

    /*@ngInject*/
    constructor(constants) {
        self = this;
        self.book = {
            id : 'creature-havoc',
            version : constants.version,
            name : 'The Creature from Havoc'
        };
    }

    getBook() {
        return self.book;
    }
}

export default CreatureFromHavocService;