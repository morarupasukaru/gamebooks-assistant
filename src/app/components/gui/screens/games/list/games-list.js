import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngMaterial from 'angular-material';

import template from './games-list.html';
import controller from './games-list.controller';

let gamesListModule = angular.module('app.components.gui.screen.games.list', [
    uiRouter, ngMaterial
])
    .config(/*@ngInject*/($stateProvider, $urlRouterProvider, constants) => {
        $urlRouterProvider.otherwise('/');

        $stateProvider.state('gamesList', {
            url: constants.url.games + '?importGame&importAdventure', template: '<games-list></games-list>'
        });
    })

    .component('gamesList', { template, controller });

export default gamesListModule;