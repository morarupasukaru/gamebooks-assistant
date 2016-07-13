import angular from 'angular';
import uiRouter from 'angular-ui-router';

import template from './paragraph.html';
import controller from './paragraph.controller';

let paragraphModule = angular.module('app.components.gui.screen.paragraph', [])
    .component('paragraph', { template, controller });

export default paragraphModule;