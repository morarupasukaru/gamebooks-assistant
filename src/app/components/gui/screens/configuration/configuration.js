import angular from 'angular';
import uiRouter from 'angular-ui-router';

import template from './configuration.html';
import controller from './configuration.controller';

let configurationModule = angular.module('app.components.gui.screen.configuration', [
    uiRouter
])
    .config(/*@ngInject*/($stateProvider, $urlRouterProvider) => {
        $urlRouterProvider.otherwise('/');

        $stateProvider.state('configuration', {
            url: '/configuration', template: '<configuration></configuration>'
        });
    })

    .component('configuration', { template, controller });

export default configurationModule;