import angular from 'angular';

import template from './node.html';
import controller from './node.controller';
import './node.css';

let nodeModule = angular.module('app.components.gui.components.nodes.node', [])
    .component('node', {
        template,
        controller,
        bindings: {
            data: '<',
            rootNode: '<'
        }
    });

export default nodeModule;