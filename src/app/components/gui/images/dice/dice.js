import angular from 'angular';

import template from './dice.html';

let diceImageModule = angular.module('app.components.gui.images.dice', [])
    .component('diceImage', { template });

export default diceImageModule;