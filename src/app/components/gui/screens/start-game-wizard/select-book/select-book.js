import angular from 'angular';
import uiRouter from 'angular-ui-router';

import template from './select-book.html';
import controller from './select-book.controller';

let SelectBookModule = angular.module('app.components.gui.screen.start-game-wizard.select-book', [
    uiRouter
])
    .config(/*@ngInject*/($stateProvider, $urlRouterProvider, constants) => {
        $urlRouterProvider.otherwise('/');

        $stateProvider.state('select-book', {
            url: constants.url.selectBookForNewGame, template: '<select-book></select-book>'
        });
    })

    .component('selectBook', { template, controller });

export default SelectBookModule;