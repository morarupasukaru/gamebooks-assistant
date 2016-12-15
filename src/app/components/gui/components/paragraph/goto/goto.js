import angular from 'angular';

import template from './goto.html';
import controller from './goto.controller';

let gotoModule = angular.module('app.components.gui.screen.paragraph.goto', [])
    .component('goto', {
        template,
        controller,
        bindings: {
            gameId: '<',
            paragraph: '<'
        }
    });

export default gotoModule;