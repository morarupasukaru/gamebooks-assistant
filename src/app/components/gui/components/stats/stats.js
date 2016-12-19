import angular from 'angular';

import template from './stats.html';
import controller from './stats.controller';

let statsModule = angular.module('app.components.gui.components.stats', [])
    .component('stats', {
        template,
        controller,
        bindings: {
            gameId: '@',
            stats: '='
        }
    });

export default statsModule;