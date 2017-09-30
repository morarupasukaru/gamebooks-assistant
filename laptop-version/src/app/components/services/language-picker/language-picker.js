import angular from 'angular';

import service from './language-picker.service';

let languagePickerModule = angular.module('app.components.gui.components.language-picker', [])
    .service('languagePickerService', service);

export default languagePickerModule;