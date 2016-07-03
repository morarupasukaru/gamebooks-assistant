import angular from 'angular';
import uiRouter from 'angular-ui-router';

import template from './test-popup.html';
import controller from './test-popup.controller';
import './test-popup.css';

let testPopupModule = angular.module('app.components.gui.screen.test-popup', [
    uiRouter
])
    .config(/*@ngInject*/($stateProvider, $urlRouterProvider, constants) => {
        $urlRouterProvider.otherwise('/');

        $stateProvider.state('test-popup', {
            url: '/testpopup', template: '<test-popup></test-popup>'
        });
    })

    .component('testPopup', { template, controller });

export default testPopupModule;