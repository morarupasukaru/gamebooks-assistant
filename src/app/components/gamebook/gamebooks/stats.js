import angular from 'angular';
import uiRouter from 'angular-ui-router';

import statsComponent from './stats.component';

let statsModule = angular.module('stats', [
    uiRouter
])
    .config(/*@ngInject*/($stateProvider, $urlRouterProvider) => {
        $urlRouterProvider.otherwise('/');

        $stateProvider.state('stats', {
            url: '/stats', template: '<stats></stats>'
        });
    })

    .directive('stats', statsComponent);

export default statsModule;