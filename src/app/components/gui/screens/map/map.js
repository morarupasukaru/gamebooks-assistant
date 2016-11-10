import angular from 'angular';
import uiRouter from 'angular-ui-router';

import template from './map.html';
import controller from './map.controller';
import './map.css';

let mapModule = angular.module('app.components.gui.screen.map', [
    uiRouter
])
    .config(/*@ngInject*/($stateProvider, $urlRouterProvider, constants) => {
        $urlRouterProvider.otherwise('/');

        $stateProvider.state('map', {
            url: constants.url.map, template: '<map></map>'
        });
    })

    .component('map', { template, controller });

export default mapModule;