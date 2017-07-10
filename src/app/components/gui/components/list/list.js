import angular from 'angular';

import template from './list.html';
import controller from './list.controller';

let listModule = angular.module('app.components.gui.components.list', [])
    .component('list', {
        template,
        controller,
        transclude: true,
        bindings: {
            entries: '<',
            onSave: '&',
            withTransclude: '@'
        }
     });

export default listModule;