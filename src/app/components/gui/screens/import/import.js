import angular from 'angular';
import uiRouter from 'angular-ui-router';

import template from './import.html';
import controller from './import.controller';

let importModule = angular.module('app.components.gui.screen.import', [
    uiRouter
])
    .config(/*@ngInject*/($stateProvider, $urlRouterProvider, constants) => {
        $urlRouterProvider.otherwise('/');

        $stateProvider.state('import', {
            url: constants.url.import, template: '<import></import>'
        });
    })

    .component('import', { template, controller });

export default importModule;