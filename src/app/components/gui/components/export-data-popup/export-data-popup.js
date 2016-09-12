import angular from 'angular';

import template from './export-data-popup.html';
import controller from './export-data-popup.controller';
import exportDataPopupService from './export-data-popup.service';

let exportDataPopupModule = angular.module('app.components.gui.components.export-data-popup', [])
    .component('exportDataPopup', {
        template,
        controller,
        bindings: {
            config: '<'
        }
    })
    .service('exportDataPopupService', exportDataPopupService)
    .constant('exportMethods', { file:'file', text:'text', email:'email'});

export default exportDataPopupModule;