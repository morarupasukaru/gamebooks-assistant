class NodeController {
    /*@ngInject*/
    constructor() {
    }

    toggleCollapse(node) {
        if (!!node.children) {
            if (!node.collapsed) {
                node.collapsed = true;
            } else {
                node.collapsed = !node.collapsed;
            }
        }
    }
}

export default NodeController;