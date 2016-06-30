import angular from 'angular';
import uiRouter from 'angular-ui-router';

import template from './games.html';
import controller from './games.controller';

let gamesModule = angular.module('app.components.gui.screen.games', [
    uiRouter
])
    .config(/*@ngInject*/($stateProvider, $urlRouterProvider) => {
        $urlRouterProvider.otherwise('/');

        $stateProvider.state('games', {
            url: '/games', template: '<games></games>'
        });
    })

    .component('games', { template, controller });

export default gamesModule;