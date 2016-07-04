import angular from 'angular';
import uiRouter from 'angular-ui-router';

import template from './popup.html';
import controller from './popup.controller';
import './popup.css';

let popupModule = angular.module('app.components.gui.components.popup', [])
    .component('popup', {
        template,
        controller,
        bindings: {
            config: '@'
        }
    });

export default popupModule;