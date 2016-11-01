import angular from 'angular';
import uiRouter from 'angular-ui-router';

import template from './navbar.html';
import controller from './navbar.controller';

let navbarModule = angular.module('app.components.gui.components.navbar', [uiRouter])
    .component('navbar', { template, controller });

export default navbarModule;