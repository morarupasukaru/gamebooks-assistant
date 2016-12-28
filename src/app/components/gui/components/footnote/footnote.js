import angular from 'angular';

import template from './footnote.html';
import controller from './footnote.controller';
import './footnote.css';

let footnoteModule = angular.module('app.components.gui.components.footnote', [])
    .component('footnote', {
        template,
        controller
     });

export default footnoteModule;