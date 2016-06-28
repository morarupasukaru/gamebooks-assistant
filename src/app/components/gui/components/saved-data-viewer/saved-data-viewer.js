import angular from 'angular';
import uiRouter from 'angular-ui-router';

import template from './saved-data-viewer.html';
import controller from './saved-data-viewer.controller';

let savedDataViewerModule = angular.module('app.components.gui.components.saved-data-viewer', [])
    .component('savedDataViewer', { template, controller });

export default savedDataViewerModule;