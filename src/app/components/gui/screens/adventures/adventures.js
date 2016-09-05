import angular from 'angular';
import uiRouter from 'angular-ui-router';

import template from './adventures.html';
import controller from './adventures.controller';

let adventuresModule = angular.module('app.components.gui.screen.adventures', [
    uiRouter
])
    .config(/*@ngInject*/($stateProvider, $urlRouterProvider, constants) => {
        $urlRouterProvider.otherwise('/');

        $stateProvider.state('adventures', {
            url: constants.url.adventures, template: '<adventures></adventures>'
        });
    })

    .component('adventures', { template, controller });

export default adventuresModule;