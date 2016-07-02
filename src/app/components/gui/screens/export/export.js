import angular from 'angular';
import uiRouter from 'angular-ui-router';

import template from './export.html';
import controller from './export.controller';

let exportModule = angular.module('app.components.gui.screen.export', [
    uiRouter
])
    .config(/*@ngInject*/($stateProvider, $urlRouterProvider, constants) => {
        $urlRouterProvider.otherwise('/');

        $stateProvider.state('export', {
            url: constants.url.export, template: '<export></export>'
        });
    })

    .component('export', { template, controller });

export default exportModule;