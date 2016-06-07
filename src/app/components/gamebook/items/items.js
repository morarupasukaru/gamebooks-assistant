import angular from 'angular';
import uiRouter from 'angular-ui-router';

import itemsComponent from './items.component';

let itemsModule = angular.module('items', [
    uiRouter
])
    .config(/*@ngInject*/($stateProvider, $urlRouterProvider) => {
        $urlRouterProvider.otherwise('/');

        $stateProvider.state('items', {
            url: '/items', template: '<items></items>'
        });
    })

    .directive('items', itemsComponent);

export default itemsModule;