import angular from 'angular';

import template from './items.html';
import controller from './items.controller';

let itemsModule = angular.module('app.components.gui.screen.items', [])
    .component('items', {
        template,
        controller,
        bindings: {
            gameId: '=?',
            items: '='
        }
     });

export default itemsModule;