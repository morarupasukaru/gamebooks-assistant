import angular from 'angular';

import template from './nodes.html';
import controller from './nodes.controller';

let nodesModule = angular.module('app.components.gui.components.nodes', [])
    .component('nodes', {
        template,
        controller,
        bindings: {
            adventureId: '<',
            rootParagraphNr: '<'
        }
    });

export default nodesModule;