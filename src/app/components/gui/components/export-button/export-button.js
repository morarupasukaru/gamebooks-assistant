import angular from 'angular';

import template from './export-button.html';
import controller from './export-button.controller';

let exportButtonModule = angular.module('app.components.gui.components.export-button', [])
    .component('exportButton', {
        template,
        controller,
        bindings: {
            data: '<',
            title: '@',
            disabled: '<?'
        }
    });
export default exportButtonModule;