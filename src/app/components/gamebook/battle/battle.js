import angular from 'angular';
import uiRouter from 'angular-ui-router';

import template from './battle.html';
import controller from './battle.controller';

let battleModule = angular.module('battle', [
    uiRouter
])
    .config(/*@ngInject*/($stateProvider, $urlRouterProvider) => {
        $urlRouterProvider.otherwise('/');

        $stateProvider.state('battle/{id}', {
            url: '/battle', template: '<battle></battle>'
        });
    })

    .component('battle', { template, controller });

export default battleModule;