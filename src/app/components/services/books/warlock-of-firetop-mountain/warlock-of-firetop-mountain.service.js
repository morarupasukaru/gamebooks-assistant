let self;
class WarlockOfFiretopMountainService {

    /*@ngInject*/
    constructor() {
        self = this;
        self.book = {
            name : 'The Warlock of Firetop Mountain',
            authors : 'Steve Jackson & Ian Livingstone',
            isbn :'0-7434-7511-9',
            stats : [
                {
                    name : 'Skill',
                    init: { sixDiceQuantity : 1, constant : 6}
                },
                {
                    name : 'Stamina',
                    init: { sixDiceQuantity : 2, constant : 12}
                },
                {
                    name : 'Luck',
                    init: { sixDiceQuantity : 1, constant : 6},
                }
            ],
            items : [
                {
                    quantity : 1,
                    description : 'sword'
                },
                {
                    quantity : 1,
                    description : 'shield'
                },
                {
                    quantity : 1,
                    description : 'leather armour'
                },
                {
                    quantity : 1,
                    description : 'backpack'
                },
                {
                    quantity : 1,
                    description : 'lantern'
                },
                {
                    quantity : 10,
                    description : 'meal (add 4 points to stamina)'
                },
                {
                    quantity : 2,
                    description : 'measure of potion of skill (restore skill points)'
                },
                {
                    quantity : 2,
                    description : 'measure of potion of strength (restore stamina points)'
                },
                {
                    quantity : 2,
                    description : 'measure of potion of luck (increase initial luck by 1 point and restore luck points)'
                }
            ],
            paragraphs : [
                {
                    paragraphNr : null,
                    description : 'Start',
                    choices : [
                        {
                            paragraphNr : 1,
                            description : 'Go to Firetop Mountain'
                        }
                    ]
                }
            ],
            notes : [
                { note : 'Please choose either the potion of skill, strengh or luck (remove corresponding two unchoosen potions from items list.' }
            ]
        };
    }

    getBook() {
        return self.book;
    }
}

export default WarlockOfFiretopMountainService;