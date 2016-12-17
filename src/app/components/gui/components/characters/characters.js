import angular from 'angular';
import uiRouter from 'angular-ui-router';

import template from './characters.html';
import controller from './characters.controller';

let CharactersModule = angular.module('app.components.gui.components.characters', [])
    .component('characters', {
        template,
        controller,
        bindings: {
            gameId: '<'
        }
});

export default CharactersModule;