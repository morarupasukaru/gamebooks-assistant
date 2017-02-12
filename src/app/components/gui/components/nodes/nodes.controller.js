class NodesController {
    /*@ngInject*/
    constructor(mapPersistenceService, gamePersistenceService, adventurePersistenceService) {
        this.mapPersistenceService = mapPersistenceService;
        this.gamePersistenceService = gamePersistenceService;
        this.adventurePersistenceService = adventurePersistenceService;
        this.initData();
    }

    initData() {
        this.setRootParagraphNr(this.rootParagraphNr);
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
                let pathElement = { value: game.path[i] };
                let paragraph = this.adventurePersistenceService.getParagraph(this.adventureId, game.path[i]);
                if (!!paragraph.tag) {
                    pathElement.tag = paragraph.tag;
                }
                this.path.push(pathElement);
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

    setRootParagraphNr(paragraphNr) {
        this.rootParagraphNr= paragraphNr;
        this.displayedLastParagraphCount = 5;
        this.computeDisplayedLastParagraphs();
        this.rootNode = this.mapPersistenceService.getMap(this.adventureId, this.rootParagraphNr);
        this.collapseAll(this.rootNode)
        this.expand(this.rootNode, 5);
    }
}

export default NodesController;