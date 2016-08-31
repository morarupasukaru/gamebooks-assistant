import angular from 'angular';
import uiRouter from 'angular-ui-router';

import template from './books.html';
import controller from './books.controller';

let booksModule = angular.module('app.components.gui.screen.books', [
    uiRouter
])
    .config(/*@ngInject*/($stateProvider, $urlRouterProvider, constants) => {
        $urlRouterProvider.otherwise('/');

        $stateProvider.state('books', {
            url: constants.url.books, template: '<books></books>'
        });
    })

    .component('books', { template, controller });

export default booksModule;