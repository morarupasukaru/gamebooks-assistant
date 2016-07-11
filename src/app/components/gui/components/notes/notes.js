import angular from 'angular';
import uiRouter from 'angular-ui-router';

import template from './notes.html';
import controller from './notes.controller';

let notesModule = angular.module('app.components.gui.screen.notes', [])
    .component('notes', {
        template,
        controller,
        bindings: {
            readonly: '@',
            paragraphNumber: '@',
            playerName: '@',
            notes: '='
        }
    });

export default notesModule;