import angular from 'angular';

import template from './dices.html';
import controller from './dices.controller';

let dicesModule = angular.module('app.components.gui.components.dices', [])
    .component('dices', { template, controller });

export default dicesModule;