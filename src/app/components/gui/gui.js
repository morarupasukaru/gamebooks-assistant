import angular from 'angular';
import Components from './components/components';
import Screens from './screens/screens';

let guiModule = angular.module('app.components.gui', [
    Components.name, Screens.name
]);

export default guiModule;