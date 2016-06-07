import angular from 'angular';
import uiRouter from 'angular-ui-router';

import pathsComponent from './paths.component';

let pathsModule = angular.module('paths', [
    uiRouter
])
    .config(/*@ngInject*/($stateProvider, $urlRouterProvider) => {
        $urlRouterProvider.otherwise('/');

        $stateProvider.state('paths', {
            url: '/paths', template: '<paths></paths>'
        });
    })

    .directive('paths', pathsComponent);

export default pathsModule;