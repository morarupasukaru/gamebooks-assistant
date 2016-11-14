class MapPersistenceService {

    /*@ngInject*/
    constructor(adventurePersistenceService, gamePersistenceService) {
        this.adventurePersistenceService = adventurePersistenceService;
        this.gamePersistenceService = gamePersistenceService;
        this.nodeSequence = 1;
    }

    getMap(adventureId) {
        let adventure = this.adventurePersistenceService.exportAdventure(adventureId);
        let knownNodes = this.getKnownNodes(adventureId);
        let root = this.createNodeRecursively(adventure.paragraphs, adventure.startParagraphNr, [], knownNodes);
        return root;
    }

    getKnownNodes(adventureId) {
        let games = this.gamePersistenceService.getGames(adventureId);
        let knownNodes = [];
        for (let i = 0; i < games.length; i++) {
            let game = games[i];
            for (let j = 0; j < game.path.length; j++) {
                knownNodes[game.path[j]] = true;
            }
        }
        return knownNodes;
    }

    findParagraph(paragraphs, paragraphNr) {
        for (let i = 0; i < paragraphs.length; i++) {
            if (paragraphNr == paragraphs[i].paragraphNr) {
                return paragraphs[i];
            }
        }
        return null;
    }

    createNodeRecursively(paragraphs, paragraphNr, paragraphsMapId, knownNodes) {
        let currentParagraph = this.findParagraph(paragraphs, paragraphNr);
        if  (!currentParagraph || !knownNodes[paragraphNr]) {
            return this.createUnknownNode(paragraphNr);
        } else {
            let nodeLinkId = paragraphsMapId[currentParagraph.paragraphNr];
            let node;
            if (!!nodeLinkId) {
                node = this.createNodeLink(currentParagraph.paragraphNr, nodeLinkId);
            } else {
                node = this.createNode(currentParagraph);
                paragraphsMapId[currentParagraph.paragraphNr] = node.id;
                if (!!currentParagraph.choices) {
                    node.children = [];
                    for (let i = 0; i < currentParagraph.choices.length; i++) {
                        node.children.push(this.createNodeRecursively(paragraphs, currentParagraph.choices[i].paragraphNr, paragraphsMapId, knownNodes));
                    }
                }
            }
            return node;
        }
    }

    createNode(paragraph) {
        let node = {
            id : this.newNodeId(),
            name: paragraph.paragraphNr
        }
        if (!!paragraph.notes) {
            node.notes = paragraph.notes;
        }
        if (!!paragraph.label) {
            node.label = paragraph.label;
        }
        return node;
    }

    createNodeLink(paragraphNr, linkNodeId) {
        let node = {
            id : this.newNodeId(),
            name: paragraphNr,
            linkNodeId: linkNodeId
        }
        return node;
    }

    createUnknownNode(paragraphNr) {
        let node = {
            id : this.newNodeId(),
            name: paragraphNr,
            unknown: true
        }
        return node;
    }

    newNodeId() {
        return this.nodeSequence++;
    }

}

export default MapPersistenceService;