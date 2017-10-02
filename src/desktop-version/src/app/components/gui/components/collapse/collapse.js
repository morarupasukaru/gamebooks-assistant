import angular from 'angular';

import template from './collapse.html';
import controller from './collapse.controller';

let collapseModule = angular.module('app.components.gui.components.collapse', [])
    .component('collapse', {
        template,
        controller,
        transclude: true,
        bindings: {
            title: '@',
            flag: '@'
        }
    });

export default collapseModule;