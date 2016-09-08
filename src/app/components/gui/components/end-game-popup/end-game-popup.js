import angular from 'angular';

import template from './end-game-popup.html';
import controller from './end-game-popup.controller';
import endGamePopupService from './end-game-popup.service';

let endGamePopupModule = angular.module('app.components.gui.components.end-game-popup', [])
    .component('endGamePopup', {
        template,
        controller,
        bindings: {
            config: '@'
        }
    })
    .service('endGamePopupService', endGamePopupService);

export default endGamePopupModule;