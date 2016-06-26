/*
 * Copyright (C) Schweizerische Bundesbahnen SBB, 2016.
 */
class NavbarController {
    /*@ngInject*/
    constructor(softwareRequirementsChecksService) {
        self = this;
        self.hasSoftwareRequirements = softwareRequirementsChecksService.hasSoftwareRequirements();
        this.name = 'navbar';
        this.navCollapsed = true;
    }
}

export default NavbarController;