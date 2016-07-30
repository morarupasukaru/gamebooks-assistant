import angular from 'angular';
import uiRouter from 'angular-ui-router';

import template from './in-game.html';
import controller from './in-game.controller';

let inGameModule = angular.module('app.components.gui.screen.in-game', [
    uiRouter
])
    .config(/*@ngInject*/($stateProvider, $urlRouterProvider, constants) => {
        $urlRouterProvider.otherwise('/');
// TODO in-game/warlock-firetop-mountain/0/game=1469857019412"
        $stateProvider.state('in-game', {
            url: constants.url.inGame, template: '<in-game></in-game>'
        });
    })

    .component('inGame', { template, controller });

export default inGameModule;