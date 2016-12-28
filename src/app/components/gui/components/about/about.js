import angular from 'angular';
import uiRouter from 'angular-ui-router';

import template from './about.html';
import controller from './about.controller';

let aboutModule = angular.module('app.components.gui.components.about', [
])
    .component('about', { template, controller });

export default aboutModule;