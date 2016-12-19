class CollapseController {
    /*@ngInject*/
    constructor() {
        this.collapsed = !!this.mapCollapsed;
    }

    toogleCollapse() {
        this.collapsed = !this.collapsed;
    }
}

export default CollapseController;