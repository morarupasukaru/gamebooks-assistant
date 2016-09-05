import angular from 'angular';
import uiRouter from 'angular-ui-router';

import template from './select-adventure.html';
import controller from './select-adventure.controller';

let SelectAdventureModule = angular.module('app.components.gui.screen.games.create.select-adventure', [
    uiRouter
])
    .config(/*@ngInject*/($stateProvider, $urlRouterProvider, constants) => {
        $urlRouterProvider.otherwise('/');

        $stateProvider.state('select-adventure', {
            url: constants.url.selectAdventureForNewGame, template: '<select-adventure></select-adventure>'
        });
    })

    .component('selectAdventure', { template, controller });

export default SelectAdventureModule;