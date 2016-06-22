import angular from 'angular';
import uiRouter from 'angular-ui-router';

import template from './stats.html';
import controller from './stats.controller';

let statsModule = angular.module('app.components.gui.screen.stats', [
    uiRouter
])
    .config(/*@ngInject*/($stateProvider, $urlRouterProvider) => {
        $urlRouterProvider.otherwise('/');

        $stateProvider.state('stats', {
            url: '/stats', template: '<stats></stats>'
        });
    })

    .component('stats', { template, controller });

export default statsModule;