let ctrl;
class StatsController {
    /*@ngInject*/
    constructor() {
        ctrl = this;
        ctrl.stats = [
            { name : 'Skill', current : 11, initial: 12 },
            { name : 'Stamina', current : 18, initial: 23 },
            { name : 'Luck', current : 7, initial: 9 }
        ];
    }
}

export default StatsController;