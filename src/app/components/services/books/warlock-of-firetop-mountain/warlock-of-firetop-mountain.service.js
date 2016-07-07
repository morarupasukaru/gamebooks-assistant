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
                    name : 'Skill',
                    init: { sixDiceQuantity : 1, constant : 6},
                }
            ],
            items : [
                {
                    quantity : 1,
                    name : 'sword'
                },
                {
                    quantity : 1,
                    name : 'shield'
                },
                {
                    quantity : 1,
                    name : 'leather armour'
                },
                {
                    quantity : 1,
                    name : 'backpack'
                },
                {
                    quantity : 1,
                    name : 'lantern'
                },
                {
                    quantity : 10,
                    name : 'meal (add 4 points to stamina)'
                },
                {
                    quantity : 2,
                    name : 'measure of potion of skill (restore skill points)'
                },
                {
                    quantity : 2,
                    name : 'measure of potion of strength (restore stamina points)'
                },
                {
                    quantity : 2,
                    name : 'measure of potion of luck (increase initial luck by 1 point and restore luck points)'
                }
            ],
            paragraphs : [
                {
                    paragraphNr : null,
                    description : 'Start',
                    notes : [
                        'Please choose either the potion of skill, strengh or luck (remove corresponding two unchoosen potions from items list.'
                    ],
                    choices : [
                        {
                            paragraphNr : 1,
                            description : 'Go to Firetop Mountain'
                        }
                    ]
                }
            ],
            notes : []
        };
    }

    getBook() {
        return self.book;
    }
}

export default WarlockOfFiretopMountainService;