import angular from 'angular';
import Components from './components/components';
import Screens from './screens/screens';
import Images from './images/images';

let guiModule = angular.module('app.components.gui', [
    Components.name, Screens.name, Images.name
]);

export default guiModule;