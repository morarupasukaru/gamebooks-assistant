import angular from 'angular';
import uiRouter from 'angular-ui-router';

import template from './about.html';
import controller from './about.controller';

let aboutModule = angular.module('app.components.gui.screen.about', [
    uiRouter
])
    .config(/*@ngInject*/($stateProvider, $urlRouterProvider, constants) => {
        $urlRouterProvider.otherwise('/');

        $stateProvider.state('about', {
            url: constants.url.about, template: '<about></about>'
        });
    })

    .component('about', { template, controller });

export default aboutModule;