import angular from 'angular';

import template from './list.html';
import controller from './list.controller';

let itemsModule = angular.module('app.components.gui.components.list', [])
    .component('list', {
        template,
        controller,
        bindings: {
            gameId: '@?',
            items: '='
        }
     });

export default itemsModule;