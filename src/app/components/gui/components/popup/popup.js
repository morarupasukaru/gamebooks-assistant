import angular from 'angular';

import template from './popup.html';
import controller from './popup.controller';
import popupService from './popup.service';
import './popup.css';

let popupModule = angular.module('app.components.gui.components.popup', [])
    .component('popup', {
        template,
        controller,
        bindings: {
            config: '@'
        }
    })
    .service('popupService', popupService);

export default popupModule;