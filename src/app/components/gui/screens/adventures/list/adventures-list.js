import angular from 'angular';
import uiRouter from 'angular-ui-router';

import template from './adventures-list.html';
import controller from './adventures-list.controller';

let adventuresListModule = angular.module('app.components.gui.screen.adventures.list', [
    uiRouter
])
    .config(/*@ngInject*/($stateProvider, $urlRouterProvider, constants) => {
        $urlRouterProvider.otherwise('/');

        $stateProvider.state('adventuresList', {
            url: constants.url.adventures + '?import', template: '<adventures-list></adventures-list>'
        });
    })

    .component('adventuresList', { template, controller });

export default adventuresListModule;