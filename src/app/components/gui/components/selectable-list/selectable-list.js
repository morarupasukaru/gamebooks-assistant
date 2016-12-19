import angular from 'angular';

import template from './selectable-list.html';
import controller from './selectable-list.controller';

let selectableListModule = angular.module('app.components.gui.components.selectable-list', [])
    .component('selectableList', {
        template,
        controller,
        bindings: {
            entries: '='
        }
     });

export default selectableListModule;