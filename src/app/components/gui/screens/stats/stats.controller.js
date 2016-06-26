class StatsController {
    /*@ngInject*/
    constructor(softwareRequirementsChecksService) {
        self = this;
        self.hasSoftwareRequirements = softwareRequirementsChecksService.hasSoftwareRequirements();
        if (self.hasSoftwareRequirements) {
            this.stats = [
                { name : 'Skill', current : 11, initial: 12 },
                { name : 'Stamina', current : 18, initial: 23 },
                { name : 'Luck', current : 7, initial: 9 }
            ];
        }
    }

    increment(row) {
        row.current = row.current + 1;
    }

    decrement(row) {
        row.current = row.current - 1;
    }
}

export default StatsController;