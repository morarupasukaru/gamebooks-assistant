import angular from 'angular';
import uiRouter from 'angular-ui-router';

import template from './notes.html';
import controller from './notes.controller';

let notesModule = angular.module('app.components.gui.screen.notes', [
    uiRouter
])
    .config(/*@ngInject*/($stateProvider, $urlRouterProvider, constants) => {
        $urlRouterProvider.otherwise('/');

        $stateProvider.state('notes', {
            url: constants.url.notes, template: '<notes></notes>'
        });
    })

    .component('notes', {
        template,
        controller,
        bindings: {
            readonly: '@',
            notes: '='
        }
    });

export default notesModule;