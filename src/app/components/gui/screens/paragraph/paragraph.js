import angular from 'angular';
import uiRouter from 'angular-ui-router';

import template from './paragraph.html';
import controller from './paragraph.controller';

let paragraphModule = angular.module('app.components.gui.screen.paragraph', [
    uiRouter
])
    .config(/*@ngInject*/($stateProvider, $urlRouterProvider, constants) => {
        $urlRouterProvider.otherwise('/');

        $stateProvider.state('paragraph', {
            url: constants.url.paragraph, template: '<paragraph></paragraph>'
        });
    })

    .component('paragraph', { template, controller });

export default paragraphModule;