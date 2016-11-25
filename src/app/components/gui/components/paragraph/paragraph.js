import angular from 'angular';

import template from './paragraph.html';
import controller from './paragraph.controller';

let paragraphModule = angular.module('app.components.gui.screen.paragraph', [])
    .component('paragraph', {
        template,
        controller,
        bindings: {
            gameId: '@',
            paragraph: '=',
            choicesTableAvailable: '<',
            choicesInTextAvailable: '<'
        }
    });

export default paragraphModule;