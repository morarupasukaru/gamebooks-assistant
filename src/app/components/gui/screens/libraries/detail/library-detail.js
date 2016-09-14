import angular from 'angular';
import uiRouter from 'angular-ui-router';

import template from './library-detail.html';
import controller from './library-detail.controller';

let libraryDetailModule = angular.module('app.components.gui.screen.libraries.detail', [
    uiRouter
])
    .config(/*@ngInject*/($stateProvider, $urlRouterProvider, constants) => {
        $urlRouterProvider.otherwise('/');

        $stateProvider.state('library-detail', {
            url: constants.url.libraryDetail + '/{libraryId}', template: '<library-detail></library-detail>'
        });
    })

    .component('libraryDetail', { template, controller });

export default libraryDetailModule;