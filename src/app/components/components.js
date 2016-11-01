import angular from 'angular';
import Gui from './gui/gui';
import Services from './services/services';
import Constants from './constants/constants';

let componentModule = angular.module('app.components', [
    Constants.name, Services.name, Gui.name
]);

export default componentModule;