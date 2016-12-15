class NodesController {
    /*@ngInject*/
    constructor(mapPersistenceService) {
        this.mapPersistenceService = mapPersistenceService;
        this.initData();
    }

    initData() {
        this.rootNode = this.mapPersistenceService.getMap(this.adventureId, this.rootParagraphNr);
        this.collapseAll(this.rootNode)
        this.expand(this.rootNode, 2);
    }

    collapseAll(node) {
        this.collapse(node, -1);
    }

    collapse(node, level) {
        this.setCollapse(node, level, true);
    }

    expand(node, level) {
        this.setCollapse(node, level, false);
    }

    setCollapse(node, level, collapse) {
        if (!!node.children) {
            node.collapsed = collapse;
            if (level !== 0) {
                for (let i = 0; i < node.children.length; i++) {
                    this.setCollapse(node.children[i], level-1, collapse);
                }
            }
        }
    }
}

export default NodesController;