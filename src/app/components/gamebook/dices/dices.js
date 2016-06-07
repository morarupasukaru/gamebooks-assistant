import angular from 'angular';
import uiRouter from 'angular-ui-router';

import dicesComponent from './dices.component';

let dicesModule = angular.module('dices', [
    uiRouter
])
    .config(/*@ngInject*/($stateProvider, $urlRouterProvider) => {
        $urlRouterProvider.otherwise('/');

        $stateProvider.state('dices', {
            url: '/dices', template: '<dices></dices>'
        });
    })

    .directive('dices', dicesComponent);

export default dicesModule;