import angular from 'angular';

import template from './characters.html';
import controller from './characters.controller';

let charactersModule = angular.module('app.components.gui.components.characters', [])
    .component('characters', {
        template,
        controller,
        bindings: {
            gameId: '<'
        }
     });

export default charactersModule;