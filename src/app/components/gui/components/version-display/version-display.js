import angular from 'angular';

import template from './version-display.html';
import controller from './version-display.controller';

let versionDisplayModule = angular.module('app.components.gui.components.version-display', [])
    .component('versionDisplay', { template, controller });

export default versionDisplayModule;