import angular from 'angular';
import uiRouter from 'angular-ui-router';

import template from './delete-data.html';
import controller from './delete-data.controller';

let configurationModule = angular.module('app.components.gui.screen.delete-data', [
    uiRouter
])
    .config(/*@ngInject*/($stateProvider, $urlRouterProvider, constants) => {
        $urlRouterProvider.otherwise('/');

        $stateProvider.state('deleteData', {
            url: constants.url.deleteData, template: '<delete-data></delete-data>'
        });
    })

    .component('deleteData', { template, controller });

export default configurationModule;