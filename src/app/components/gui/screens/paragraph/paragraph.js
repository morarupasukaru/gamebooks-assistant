import angular from 'angular';
import uiRouter from 'angular-ui-router';

import template from './paragraph.html';
import controller from './paragraph.controller';

let paragraphModule = angular.module('paragraph', [
    uiRouter
])
    .config(/*@ngInject*/($stateProvider, $urlRouterProvider) => {
        $urlRouterProvider.otherwise('/');

        $stateProvider.state('paragraph', {
            url: '/paragraph', template: '<paragraph></paragraph>'
        });
    })

    .component('paragraph', { template, controller });

export default paragraphModule;