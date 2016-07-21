import angular from 'angular';

import template from './notes.html';
import controller from './notes.controller';

let notesModule = angular.module('app.components.gui.screen.notes', [])
    .component('notes', {
        template,
        controller,
        bindings: {
            paragraphNumber: '@',
            playerName: '@',
            notes: '='
        }
    });

export default notesModule;