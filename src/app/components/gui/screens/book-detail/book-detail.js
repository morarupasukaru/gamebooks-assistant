import angular from 'angular';
import uiRouter from 'angular-ui-router';

import template from './book-detail.html';
import controller from './book-detail.controller';

let bookDetailModule = angular.module('app.components.gui.screen.book-detail', [
    uiRouter
])
    .config(/*@ngInject*/($stateProvider, $urlRouterProvider, constants) => {
        $urlRouterProvider.otherwise('/');

        $stateProvider.state('book-detail', {
            url: constants.url.bookDetail + '/{bookId}', template: '<book-detail></book-detail>'
        });
    })

    .component('bookDetail', { template, controller });

export default bookDetailModule;