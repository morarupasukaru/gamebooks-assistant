import angular from 'angular';
import Gui from './gui/gui';
import Services from './services/services';
import Constants from './constants/constants';

let gamebookModule = angular.module('app.components.gamebook', [
    Constants.name, Services.name, Gui.name
]);

export default gamebookModule;