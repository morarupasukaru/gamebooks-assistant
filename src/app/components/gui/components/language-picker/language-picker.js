import angular from 'angular';
import uiRouter from 'angular-ui-router';

import template from './language-picker.html';
import controller from './language-picker.controller';

let languagePickerModule = angular.module('app.components.gui.components.language-picker', [])
    .component('languagePicker', { template, controller });

export default languagePickerModule;