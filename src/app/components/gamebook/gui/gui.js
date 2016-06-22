import angular from 'angular';
import Components from './components/components';

let guiModule = angular.module('app.components.gamebook.gui', [
    Components.name
]);

export default guiModule;