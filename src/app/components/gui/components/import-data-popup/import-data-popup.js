import angular from 'angular';

import template from './import-data-popup.html';
import controller from './import-data-popup.controller';
import importDataPopupService from './import-data-popup.service';

let importDataPopupModule = angular.module('app.components.gui.components.import-data-popup', [])
    .component('importDataPopup', {
        template,
        controller,
        bindings: {
            config: '<'
        }
    })
    .service('importDataPopupService', importDataPopupService)
    .constant('importMethods', { file:'file', text:'text'});

export default importDataPopupModule;