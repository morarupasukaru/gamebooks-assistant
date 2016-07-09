import angular from 'angular';
import Dices from './dices/dices';
import Messages from './messages/messages';
import Navbar from './navbar/navbar';
import LanguagePicker from './language-picker/language-picker';
import SavedDataAdmin from './saved-data-admin/saved-data-admin';
import VersionDisplay from './version-display/version-display';
import Popup from './popup/popup';
import Items from './items/items';
import Notes from './notes/notes';

let guiComponentsModule = angular.module('app.components.gui.components', [
    Dices.name, Messages.name, Navbar.name, LanguagePicker.name, SavedDataAdmin.name, VersionDisplay.name, Popup.name, Items.name, Notes.name
]);

export default guiComponentsModule;