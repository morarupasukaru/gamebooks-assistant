import angular from 'angular';
import Dices from './dices/dices';
import Messages from './messages/messages';
import Navbar from './navbar/navbar';
import LanguagePicker from './language-picker/language-picker';
import Popup from './popup/popup';
import Items from './items/items';
import Stats from './stats/stats';
import Paragraph from './paragraph/paragraph';
import BackButton from './back-button/back-button';
import EndGamePopup from './end-game-popup/end-game-popup';

let guiComponentsModule = angular.module('app.components.gui.components', [
    Dices.name, Messages.name, Navbar.name, LanguagePicker.name, Popup.name, Items.name, Stats.name, Paragraph.name, BackButton.name, EndGamePopup.name
]);

export default guiComponentsModule;