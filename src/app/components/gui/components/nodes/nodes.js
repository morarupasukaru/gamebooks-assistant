import angular from 'angular';

import Node from './node/node';
import template from './nodes.html';
import controller from './nodes.controller';

let nodesModule = angular.module('app.components.gui.components.nodes', [
        Node.name
    ])
    .component('nodes', {
        template,
        controller,
        bindings: {
            adventureId: '<',
            rootParagraphNr: '<'
        }
    });

export default nodesModule;