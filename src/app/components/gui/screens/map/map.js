import angular from 'angular';
import uiRouter from 'angular-ui-router';

import template from './map.html';
import controller from './map.controller';

let mapModule = angular.module('app.components.gui.screen.map', [
    uiRouter
])
    .config(/*@ngInject*/($stateProvider, $urlRouterProvider, constants) => {
        $urlRouterProvider.otherwise('/');

        $stateProvider.state('map', {
            url: constants.url.map + '/{adventureId}', template: '<map></map>'
        });
    })

    .component('map', { template, controller });

export default mapModule;