import angular from 'angular';
import uiRouter from 'angular-ui-router';

import template from './stats.html';
import controller from './stats.controller';

let statsModule = angular.module('app.components.gui.screen.stats', [])
    .component('stats', { template, controller });

export default statsModule;