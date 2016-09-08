import ExportGamePopup from './export-game-popup/export-game-popup';
import angular from 'angular';
import uiRouter from 'angular-ui-router';

import template from './games-list.html';
import controller from './games-list.controller';

let gamesListModule = angular.module('app.components.gui.screen.games.list', [
    uiRouter, ExportGamePopup.name
])
    .config(/*@ngInject*/($stateProvider, $urlRouterProvider, constants) => {
        $urlRouterProvider.otherwise('/');

        $stateProvider.state('gamesList', {
            url: constants.url.games, template: '<games-list></games-list>'
        });
    })

    .component('gamesList', { template, controller });

export default gamesListModule;