import angular from 'angular';
import uiRouter from 'angular-ui-router';

import template from './game-detail.html';
import controller from './game-detail.controller';

let gameDetailModule = angular.module('app.components.gui.screen.games.detail', [
    uiRouter
])
    .config(/*@ngInject*/($stateProvider, $urlRouterProvider, constants) => {
        $urlRouterProvider.otherwise('/');
        $stateProvider.state('game-detail', {
            url: constants.url.gameDetail, template: '<game-detail></game-detail>'
        });
    })

    .component('gameDetail', { template, controller });

export default gameDetailModule;