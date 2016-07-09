import angular from 'angular';
import uiRouter from 'angular-ui-router';

import template from './choose-items.html';
import controller from './choose-items.controller';

let ChooseItemsModule = angular.module('app.components.gui.screen.start-game-wizard.choose-items', [
    uiRouter
])
    .config(/*@ngInject*/($stateProvider, $urlRouterProvider, constants) => {
        $urlRouterProvider.otherwise('/');

        $stateProvider.state('choose-items', {
            url: constants.url.chooseItemsForNewGame + "?bookName", template: '<choose-items></choose-items>'
        });
    })

    .component('chooseItems', { template, controller });

export default ChooseItemsModule;