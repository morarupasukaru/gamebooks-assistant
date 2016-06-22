import angular from 'angular';
import Dices from './dices/dices';
import Messages from './messages/messages';
import Navbar from './navbar/navbar';

let guiComponentsModule = angular.module('app.components.gamebook.gui.components', [
    Dices.name, Messages.name, Navbar.name
]);

export default guiComponentsModule;