class NodesController {
    /*@ngInject*/
    constructor(mapPersistenceService, gamePersistenceService) {
        this.mapPersistenceService = mapPersistenceService;
        this.gamePersistenceService = gamePersistenceService;
        this.initData();
    }

    initData() {
        this.displayedLastParagraphCount = 3;
        this.computeDisplayedLastParagraphs();
        this.rootNode = this.mapPersistenceService.getMap(this.adventureId, this.rootParagraphNr);
        this.collapseAll(this.rootNode)
        this.expand(this.rootNode, 2);
    }

    displayMoreParagraphs() {
        this.displayedLastParagraphCount = this.displayedLastParagraphCount + 3;
        this.computeDisplayedLastParagraphs();
    }

    isDisplayMoreParagraphsButtonAvailable() {
        return this.lastParagraphCount - 2 >= this.displayedLastParagraphCount;
    }

    computeDisplayedLastParagraphs() {
        let game = this.gamePersistenceService.getGame(this.gameId);
        this.lastParagraphCount = 0;
        if (!!game.path && !!game.path.length) {
            this.lastParagraphCount = game.path.length - 1;
        }

        this.path = [];
        if (!!this.lastParagraphCount > 0) {
            let firstIndex = 0;
            let lastIndex = game.path.length - 2;
            if (this.displayedLastParagraphCount < lastIndex) {
                firstIndex = lastIndex - this.displayedLastParagraphCount + 1;
            }
            for (let i = firstIndex; i <= lastIndex; i++) {
                this.path.push({ value: game.path[i] });
            }
        }
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