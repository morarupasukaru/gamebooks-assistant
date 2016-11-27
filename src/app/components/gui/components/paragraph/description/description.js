import angular from 'angular';

import template from './description.html';
import controller from './description.controller';
import './description.css';

let descriptionModule = angular.module('app.components.gui.screen.paragraph.description', [])
    .component('description', {
        template,
        controller,
        bindings: {
            gameId: '<',
            paragraph: '<',
            choicesTableAvailable: '<',
            choicesInTextAvailable: '<'
        }
    });

export default descriptionModule;