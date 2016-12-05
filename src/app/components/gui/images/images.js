import angular from 'angular';
import Map from './map/map';
import Dice from './dice/dice';

let imagesModule = angular.module('app.components.gui.images', [
    Map.name, Dice.name
]);

export default imagesModule;