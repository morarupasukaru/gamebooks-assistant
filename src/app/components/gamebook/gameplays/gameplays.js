import angular from 'angular';
import uiRouter from 'angular-ui-router';

import template from './gameplays.html';
import controller from './gameplays.controller';

let gameplaysModule = angular.module('gameplays', [
    uiRouter
])
    .config(/*@ngInject*/($stateProvider, $urlRouterProvider) => {
        $urlRouterProvider.otherwise('/');

        $stateProvider.state('gameplays', {
            url: '/gameplays', template: '<gameplays></gameplays>'
        });
    })

    .component('gameplays', { template, controller });

export default gameplaysModule;