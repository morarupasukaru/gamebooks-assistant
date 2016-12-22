import angular from 'angular';
import uiRouter from 'angular-ui-router';

import template from './characters-deprecated.html';
import controller from './characters-deprecated.controller';

let DeprecatedCharactersModule = angular.module('app.components.gui.components.characters-deprecated', [])
    .component('charactersDeprecated', {
        template,
        controller,
        bindings: {
            gameId: '<'
        }
});

export default DeprecatedCharactersModule;