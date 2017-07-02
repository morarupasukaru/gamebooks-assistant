import angular from 'angular';
import uiRouter from 'angular-ui-router';

import template from './adventure-detail.html';
import controller from './adventure-detail.controller';

let adventureDetailModule = angular.module('app.components.gui.screen.adventures.detail', [
    uiRouter
])
    .config(/*@ngInject*/($stateProvider, $urlRouterProvider, constants) => {
        $urlRouterProvider.otherwise('/');

        $stateProvider.state('adventure-detail', {
            url: '/adventure/{adventureId}', template: '<adventure-detail></adventure-detail>'
        });
    })

    .component('adventureDetail', { template, controller });

export default adventureDetailModule;