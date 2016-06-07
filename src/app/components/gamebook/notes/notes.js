import angular from 'angular';
import uiRouter from 'angular-ui-router';

import notesComponent from './notes.component';

let notesModule = angular.module('notes', [
    uiRouter
])
    .config(/*@ngInject*/($stateProvider, $urlRouterProvider) => {
        $urlRouterProvider.otherwise('/');

        $stateProvider.state('notes', {
            url: '/notes', template: '<notes></notes>'
        });
    })

    .directive('notes', notesComponent);

export default notesModule;