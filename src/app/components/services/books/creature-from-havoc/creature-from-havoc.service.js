let self;
class CreatureFromHavocService {

    /*@ngInject*/
    constructor() {
        self = this;
        self.book = {
            name : 'The Creature from Havoc'
        };
    }

    getBook() {
        return self.book;
    }
}

export default CreatureFromHavocService;