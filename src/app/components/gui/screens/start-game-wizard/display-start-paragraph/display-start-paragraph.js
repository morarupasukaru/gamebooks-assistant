import angular from 'angular';
import uiRouter from 'angular-ui-router';

import template from './display-start-paragraph.html';
import controller from './display-start-paragraph.controller';

let DisplayStartParagraphModule = angular.module('app.components.gui.screen.start-game-wizard.display-start-paragraph', [
    uiRouter
])
    .config(/*@ngInject*/($stateProvider, $urlRouterProvider, constants) => {
        $urlRouterProvider.otherwise('/');

        $stateProvider.state('display-start-paragraph', {
            url: constants.url.displayStartParagraphForNewGame, template: '<display-start-paragraph></display-start-paragraph>'
        });
    })

    .component('displayStartParagraph', { template, controller });

export default DisplayStartParagraphModule;