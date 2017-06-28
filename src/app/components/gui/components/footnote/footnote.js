import angular from 'angular';

import template from './footnote.html';
import controller from './footnote.controller';

let footnoteModule = angular.module('app.components.gui.components.footnote', [])
    .component('footnote', {
        template,
        controller
     });

export default footnoteModule;