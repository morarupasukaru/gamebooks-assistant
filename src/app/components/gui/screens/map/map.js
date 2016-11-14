import angular from 'angular';
import uiRouter from 'angular-ui-router';

import Node from './node/node';
import template from './map.html';
import controller from './map.controller';
import './map.css';

let mapModule = angular.module('app.components.gui.screen.map', [
    uiRouter, Node.name
])
    .config(/*@ngInject*/($stateProvider, $urlRouterProvider, constants) => {
        $urlRouterProvider.otherwise('/');

        $stateProvider.state('map', {
            url: constants.url.map + '/{adventureId}', template: '<map></map>'
        });
    })

    .component('map', { template, controller });

export default mapModule;