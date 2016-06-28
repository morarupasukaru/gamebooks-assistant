import angular from 'angular';
import Dices from './dices/dices';
import Messages from './messages/messages';
import Navbar from './navbar/navbar';
import LanguagePicker from './language-picker/language-picker';
import SavedDataViewer from './saved-data-viewer/saved-data-viewer';

let guiComponentsModule = angular.module('app.components.gui.components', [
    Dices.name, Messages.name, Navbar.name, LanguagePicker.name, SavedDataViewer.name
]);

export default guiComponentsModule;