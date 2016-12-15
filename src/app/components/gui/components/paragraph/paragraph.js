import angular from 'angular';

import Description from './description/description';
import Goto from './goto/goto';
import template from './paragraph.html';
import controller from './paragraph.controller';

let paragraphModule = angular.module('app.components.gui.screen.paragraph', [ Description.name, Goto.name ])
    .component('paragraph', {
        template,
        controller,
        bindings: {
            gameId: '@',
            paragraph: '='
        }
    });

export default paragraphModule;