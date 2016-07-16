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
import Stats from './stats/stats';
import Paragraph from './paragraph/paragraph';
import BackButton from './back-button/back-button';

let guiComponentsModule = angular.module('app.components.gui.components', [
    Dices.name, Messages.name, Navbar.name, LanguagePicker.name, SavedDataAdmin.name, VersionDisplay.name, Popup.name, Items.name, Notes.name, Stats.name, Paragraph.name, BackButton.name
]);

export default guiComponentsModule;