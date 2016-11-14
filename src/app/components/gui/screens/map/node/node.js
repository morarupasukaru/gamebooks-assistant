import angular from 'angular';

import template from './node.html';
import controller from './node.controller';

let nodeModule = angular.module('app.components.gui.screen.map.node', [])
    .component('node', {
        template,
        controller,
        bindings: {
            data: '<'
        }
    });

export default nodeModule;