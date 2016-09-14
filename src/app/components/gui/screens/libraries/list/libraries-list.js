import angular from 'angular';
import uiRouter from 'angular-ui-router';

import template from './libraries-list.html';
import controller from './libraries-list.controller';

let librariesListModule = angular.module('app.components.gui.screen.libraries.list', [
    uiRouter
])
    .config(/*@ngInject*/($stateProvider, $urlRouterProvider, constants) => {
        $urlRouterProvider.otherwise('/');

        $stateProvider.state('librariesList', {
            url: constants.url.libraries, template: '<libraries-list></libraries-list>'
        });
    })

    .component('librariesList', { template, controller });

export default librariesListModule;