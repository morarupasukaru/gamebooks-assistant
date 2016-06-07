import angular from 'angular';
import uiRouter from 'angular-ui-router';

import exportComponent from './export.component';

let exportModule = angular.module('export', [
    uiRouter
])
    .config(/*@ngInject*/($stateProvider, $urlRouterProvider) => {
        $urlRouterProvider.otherwise('/');

        $stateProvider.state('export', {
            url: '/export', template: '<export></export>'
        });
    })

    .directive('export', exportComponent);

export default exportModule;