import angular from 'angular';

import template from './toolbar.html';
import controller from './toolbar.controller';

let toolbarModule = angular.module('app.components.gui.components.toolbar', [
])
    .component('toolbar', {
        template,
        controller,
        controllerAs: '$controller',
            bindings: {
                title: '@'
            }
        });

export default toolbarModule;