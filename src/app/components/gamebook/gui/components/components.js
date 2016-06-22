import angular from 'angular';
import Dices from './dices/dices';

let guiComponentsModule = angular.module('app.components.gamebook.gui.components', [
    Dices.name
]);

export default guiComponentsModule;