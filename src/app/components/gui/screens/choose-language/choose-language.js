import angular from 'angular';
import uiRouter from 'angular-ui-router';

import template from './choose-language.html';
import controller from './choose-language.controller';

let chooseLanguageModule = angular.module('app.components.gui.screen.choose-language', [
    uiRouter
])
    .config(/*@ngInject*/($stateProvider, $urlRouterProvider, constants) => {
        $urlRouterProvider.otherwise('/');

        $stateProvider.state('choose-language', {
            url: constants.url.chooseLanguage, template: '<choose-language></choose-language>'
        });
    })

    .component('chooseLanguage', { template, controller });

export default chooseLanguageModule;