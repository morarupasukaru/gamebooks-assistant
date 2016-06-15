import angular from 'angular';
import uiRouter from 'angular-ui-router';

import template from './paths.html';
import controller from './paths.controller';

let pathsModule = angular.module('paths', [
    uiRouter
])
    .config(/*@ngInject*/($stateProvider, $urlRouterProvider) => {
        $urlRouterProvider.otherwise('/');

        $stateProvider.state('paths', {
            url: '/paths', template: '<paths></paths>'
        });
    })

    .component('paths', { template, controller });

export default pathsModule;