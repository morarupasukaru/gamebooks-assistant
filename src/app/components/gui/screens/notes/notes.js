import angular from 'angular';
import uiRouter from 'angular-ui-router';

import template from './notes.html';
import controller from './notes.controller';

let notesModule = angular.module('notes', [
    uiRouter
])
    .config(/*@ngInject*/($stateProvider, $urlRouterProvider) => {
        $urlRouterProvider.otherwise('/');

        $stateProvider.state('notes', {
            url: '/notes', template: '<notes></notes>'
        });
    })

    .component('notes', { template, controller });

export default notesModule;