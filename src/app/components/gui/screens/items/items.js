import angular from 'angular';
import uiRouter from 'angular-ui-router';

import template from './items.html';
import controller from './items.controller';

let itemsModule = angular.module('app.components.gui.screen.items', [
    uiRouter
])
    .config(/*@ngInject*/($stateProvider, $urlRouterProvider) => {
        $urlRouterProvider.otherwise('/');

        $stateProvider.state('items', {
            url: '/items', template: '<items></items>'
        });
    })

    .component('items', { template, controller });

export default itemsModule;