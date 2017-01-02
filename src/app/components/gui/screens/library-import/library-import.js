import angular from 'angular';
import uiRouter from 'angular-ui-router';

import template from './library-import.html';
import controller from './library-import.controller';

let libraryImportModule = angular.module('app.components.gui.screen.library-import', [
    uiRouter
])
    .config(/*@ngInject*/($stateProvider, $urlRouterProvider, constants) => {
        $urlRouterProvider.otherwise('/');

        $stateProvider.state('libraryImport', {
            url: constants.url.libraryImport + '?import', template: '<library-import></library-import>'
        });
    })

    .component('libraryImport', { template, controller });

export default libraryImportModule;