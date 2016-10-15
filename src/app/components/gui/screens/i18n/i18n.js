import angular from 'angular';
import uiRouter from 'angular-ui-router';

import template from './i18n.html';
import controller from './i18n.controller';

let i18nModule = angular.module('app.components.gui.screen.i18n', [
    uiRouter
])
    .config(/*@ngInject*/($stateProvider, $urlRouterProvider, constants) => {
        $urlRouterProvider.otherwise('/');

        $stateProvider.state('i18n', {
            url: constants.url.i18n + '/{language}', template: '<i18n></i18n>'
        });
    })

    .component('i18n', { template, controller });

export default i18nModule;