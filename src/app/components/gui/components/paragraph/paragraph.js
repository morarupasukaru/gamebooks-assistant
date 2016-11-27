import angular from 'angular';

import Description from './description/description';
import template from './paragraph.html';
import controller from './paragraph.controller';

let paragraphModule = angular.module('app.components.gui.screen.paragraph', [ Description.name ])
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