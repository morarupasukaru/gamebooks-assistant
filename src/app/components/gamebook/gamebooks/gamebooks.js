import angular from 'angular';
import uiRouter from 'angular-ui-router';

import template from './gamebooks.html';
import controller from './gamebooks.controller';

let gamebooksModule = angular.module('gamebooks', [
    uiRouter
])
    .config(/*@ngInject*/($stateProvider, $urlRouterProvider) => {
        $urlRouterProvider.otherwise('/');

        $stateProvider.state('gamebooks', {
            url: '/gamebooks', template: '<gamebooks></gamebooks>'
        });
    })

    .component('gamebooks', { template, controller });

export default gamebooksModule;