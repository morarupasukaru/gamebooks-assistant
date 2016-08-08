let self;
class WarlockOfFiretopMountainService {

    /*@ngInject*/
    constructor(constants) {
        self = this;
        self.constants = constants;
        self.book = {
            id : 'warlock-firetop-mountain',
            version : self.constants.version,
            name : 'The Warlock of Firetop Mountain',
            authors : 'Steve Jackson & Ian Livingstone',
            isbn :'0-7434-7511-9',
            stats : [
                {
                    name : 'Skill',
                    init: { sixDiceQuantity : 1, constant : 6},
                    battle: {
                        displayed: true,
                        enemyDefaultValue : 5,
                        editableForEnemy : true
                    }
                },
                {
                    name : 'Stamina',
                    init: { sixDiceQuantity : 2, constant : 12},
                    battle: {
                        displayed : true,
                        enemyDefaultValue : 4,
                        editableForEnemy : true
                    }
                },
                {
                    name : 'Luck',
                    init: { sixDiceQuantity : 1, constant : 6},
                    battle: {
                        displayed : true,
                        enemyDefaultValue : undefined,
                        editableForEnemy : false
                    }
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
            startParagraphNr : 1,
            paragraphs : [
                {
                    version : self.constants.version,
                    paragraphNr : 1,
                    description : 'Dark cave entrance',
                    choices : [
                        {
                            paragraphNr : 71,
                            description : 'turn west'
                        },
                        {
                            paragraphNr : 278,
                            description : 'turn east'
                        }
                    ],
                    notes : [
                        { note : 'a note' } // TODO remove, for testing purpose
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