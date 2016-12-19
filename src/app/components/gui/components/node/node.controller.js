class NodeController {
    /*@ngInject*/
    constructor() {
    }

    click() {
        if (!!this.data.children) {
            this.toggleCollapse(this.data);
        } else if (!!this.data.linkNodeId) {
            this.expandUpTo(this.data.linkNodeId);
        }
    }

    expandUpTo(nodeId) {
        let path = [];
        this.findNode(this.rootNode, nodeId, path);
        for (let i = 0; i < path.length; i++) {
            path[i].collapsed = false;
        }
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

    over() {
        this.mouseOver(this.data, true);
    }

    leave() {
        this.mouseOver(this.data, false);
    }

    mouseOver(node, hasMouseOver) {
        if (!node.mouseOver && hasMouseOver) {
            node.mouseOver = hasMouseOver;
            this.highlight(node, true);
        } else {
            delete node.mouseOver;
            this.highlight(node, false);
        }
    }

    highlight(node, highlighted) {
        if (!!highlighted) {
            node.highlighted = true;
        } else {
            delete node.highlighted;
        }
        if (!!node.linkNodeId) {
            let linkNode = this.findNode(this.rootNode, node.linkNodeId, []);
            if (!!linkNode) {
                this.highlight(linkNode, highlighted);
            }
        }
    }

    findNode(currentNode, nodeId, path) {
        path.push(currentNode);
        if (nodeId === currentNode.id) {
            return currentNode;
        } else {
            if (!!currentNode.children) {
                for (let i = 0; i < currentNode.children.length; i++) {
                    let foundNode = this.findNode(currentNode.children[i], nodeId, path);
                    if (!!foundNode) {
                        return foundNode;
                    }
                }
            }
        }
        let index = path.indexOf(currentNode);
        path.splice(index, 1);
        return null;
    }
}

export default NodeController;