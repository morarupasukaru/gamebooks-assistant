import angular from 'angular';
import uiRouter from 'angular-ui-router';

import template from './dices.html';
import controller from './dices.controller';

let dicesModule = angular.module('dices', [
    uiRouter
])
    .config(/*@ngInject*/($stateProvider, $urlRouterProvider) => {
        $urlRouterProvider.otherwise('/');

        $stateProvider.state('dices', {
            url: '/dices', template: '<dices></dices>'
        });
    })

    .component('dices', { template, controller });

export default dicesModule;