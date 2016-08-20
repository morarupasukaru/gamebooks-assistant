import angular from 'angular';

import template from './language-picker.html';
import controller from './language-picker.controller';
import service from './language-picker.service';

let languagePickerModule = angular.module('app.components.gui.components.language-picker', [])
    .component('languagePicker', { template, controller })
    .service('languagePickerService', service);

export default languagePickerModule;