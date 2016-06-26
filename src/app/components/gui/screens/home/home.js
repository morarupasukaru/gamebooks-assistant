import angular from 'angular';
import uiRouter from 'angular-ui-router';

import template from './home.html';
import controller from './home.controller';

let homeModule = angular.module('app.components.gui.screen.home', [
    uiRouter
])
    .config(/*@ngInject*/($stateProvider, $urlRouterProvider) => {
        $urlRouterProvider.otherwise('/');

        $stateProvider.state('home', {
            url: '/', template: '<home></home>'
        });
    })

    .component('home', { template, controller });

export default homeModule;