import angular from 'angular';
import uiRouter from 'angular-ui-router';

import importComponent from './import.component';

let importModule = angular.module('import', [
    uiRouter
])
    .config(/*@ngInject*/($stateProvider, $urlRouterProvider) => {
        $urlRouterProvider.otherwise('/');

        $stateProvider.state('import', {
            url: '/import', template: '<import></import>'
        });
    })

    .directive('import', importComponent);

export default importModule;