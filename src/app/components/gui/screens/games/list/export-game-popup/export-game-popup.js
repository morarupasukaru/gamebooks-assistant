import angular from 'angular';

import template from './export-game-popup.html';
import controller from './export-game-popup.controller';
import exportGamePopupService from './export-game-popup.service';

let exportGamePopupModule = angular.module('app.components.gui.components.screen.games.list.export-game-popup', [])
    .component('exportGamePopup', {
        template,
        controller,
        bindings: {
            config: '@'
        }
    })
    .service('exportGamePopupService', exportGamePopupService)
    .constant('exportMethods', { file:'file', text:'text', email:'email'});

export default exportGamePopupModule;