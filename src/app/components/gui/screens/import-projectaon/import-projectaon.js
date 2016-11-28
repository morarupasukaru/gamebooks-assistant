import angular from 'angular';
import uiRouter from 'angular-ui-router';

import template from './import-projectaon.html';
import controller from './import-projectaon.controller';

let importProjectaonModule = angular.module('app.components.gui.screen.import-projectaon', [
    uiRouter
])
    .config(/*@ngInject*/($stateProvider, $urlRouterProvider, constants) => {
        $urlRouterProvider.otherwise('/');

        $stateProvider.state('importProjectaon', {
            url: constants.url.importProjectaon, template: '<import-projectaon></import-projectaon>'
        });
    })

    .component('importProjectaon', { template, controller });

export default importProjectaonModule;