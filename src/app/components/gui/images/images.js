import angular from 'angular';
import Map from './map/map';

let imagesModule = angular.module('app.components.gui.images', [
    Map.name
]);

export default imagesModule;