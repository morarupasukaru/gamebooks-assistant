import angular from 'angular';
import uiRouter from 'angular-ui-router';

import template from './administration.html';
import controller from './administration.controller';

let administrationModule = angular.module('app.components.gui.screen.administration', [
    uiRouter
])
    .config(/*@ngInject*/($stateProvider, $urlRouterProvider, constants) => {
        $urlRouterProvider.otherwise('/');

        $stateProvider.state('administration', {
            url: '/administration', template: '<administration></administration>'
        });
    })

    .component('administration', { template, controller });

export default administrationModule;