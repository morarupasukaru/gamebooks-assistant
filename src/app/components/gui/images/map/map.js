import angular from 'angular';

import template from './map.html';

let mapImageModule = angular.module('app.components.gui.images.map', [])
    .component('mapImage', { template });

export default mapImageModule;