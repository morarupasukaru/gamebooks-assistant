import angular from 'angular';
import uiRouter from 'angular-ui-router';

import template from './export.html';
import controller from './export.controller';

let exportModule = angular.module('export', [
    uiRouter
])
    .config(/*@ngInject*/($stateProvider, $urlRouterProvider) => {
        $urlRouterProvider.otherwise('/');

        $stateProvider.state('export', {
            url: '/export', template: '<export></export>'
        });
    })

    .component('export', { template, controller });

export default exportModule;