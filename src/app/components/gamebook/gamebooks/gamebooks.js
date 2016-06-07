import angular from 'angular';
import uiRouter from 'angular-ui-router';

import gamebooksComponent from './gamebooks.component';

let gamebooksModule = angular.module('gamebooks', [
    uiRouter
])
    .config(/*@ngInject*/($stateProvider, $urlRouterProvider) => {
        $urlRouterProvider.otherwise('/');

        $stateProvider.state('gamebooks', {
            url: '/gamebooks', template: '<gamebooks></gamebooks>'
        });
    })

    .directive('gamebooks', gamebooksComponent);

export default gamebooksModule;