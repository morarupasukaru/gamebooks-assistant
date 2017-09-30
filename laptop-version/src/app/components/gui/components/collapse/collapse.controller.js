
let collapse = {};

class CollapseController {
    /*@ngInject*/
    constructor() {
        if (!collapse[this.flag]) {
            collapse[this.flag] = false;
        }
        this.collapsed = !!collapse[this.flag];
    }

    toogleCollapse() {
        this.collapsed = !this.collapsed;
        collapse[this.flag] = this.collapsed;
    }
}

export default CollapseController;