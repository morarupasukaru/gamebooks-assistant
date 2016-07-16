import angular from 'angular';

import template from './saved-data-admin.html';
import controller from './saved-data-admin.controller';

let savedDataAdminModule = angular.module('app.components.gui.components.saved-data-admin', [])
    .component('savedDataAdmin', { template, controller });

export default savedDataAdminModule;