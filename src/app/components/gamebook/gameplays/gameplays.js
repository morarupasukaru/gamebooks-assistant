import angular from 'angular';
import uiRouter from 'angular-ui-router';

import gameplaysComponent from './gameplays.component';

let gameplaysModule = angular.module('gameplays', [
    uiRouter
])
    .config(/*@ngInject*/($stateProvider, $urlRouterProvider) => {
        $urlRouterProvider.otherwise('/');

        $stateProvider.state('gameplays', {
            url: '/gameplays', template: '<gameplays></gameplays>'
        });
    })

    .directive('gameplays', gameplaysComponent);

export default gameplaysModule;