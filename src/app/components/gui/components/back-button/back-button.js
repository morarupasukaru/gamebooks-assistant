import angular from 'angular';

import template from './back-button.html';
import controller from './back-button.controller';

let backButtonModule = angular.module('app.components.gui.components.back-button', [])
    .component('backButton', { template, controller });

export default backButtonModule;