import angular from 'angular';
import Dices from './dices/dices';
import Messages from './messages/messages';
import Navbar from './navbar/navbar';
import LanguagePicker from './language-picker/language-picker';
import SavedDataAdmin from './saved-data-admin/saved-data-admin';
import VersionDisplay from './version-display/version-display';

let guiComponentsModule = angular.module('app.components.gui.components', [
    Dices.name, Messages.name, Navbar.name, LanguagePicker.name, SavedDataAdmin.name, VersionDisplay.name
]);

export default guiComponentsModule;