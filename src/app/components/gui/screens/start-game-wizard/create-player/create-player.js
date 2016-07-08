import angular from 'angular';
import uiRouter from 'angular-ui-router';

import template from './create-player.html';
import controller from './create-player.controller';

let CreatePlayerModule = angular.module('app.components.gui.screen.start-game-wizard.create-player', [
    uiRouter
])
    .config(/*@ngInject*/($stateProvider, $urlRouterProvider, constants) => {
        $urlRouterProvider.otherwise('/');

        $stateProvider.state('create-player', {
            url: constants.url.createPlayerForNewGame + "?bookName", template: '<create-player></create-player>'
        });
    })

    .component('createPlayer', { template, controller });

export default CreatePlayerModule;