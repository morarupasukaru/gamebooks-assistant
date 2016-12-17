import angular from 'angular';
import Dices from './dices/dices';
import Messages from './messages/messages';
import Navbar from './navbar/navbar';
import Popup from './popup/popup';
import Items from './items/items';
import Stats from './stats/stats';
import Paragraph from './paragraph/paragraph';
import BackButton from './back-button/back-button';
import ExportButton from './export-button/export-button';
import ImportDataPopup from './import-data-popup/import-data-popup';
import Nodes from './nodes/nodes';
import Characters from './characters/characters';

let guiComponentsModule = angular.module('app.components.gui.components', [
    Dices.name, Messages.name, Navbar.name, Popup.name, Items.name, Stats.name, Paragraph.name, BackButton.name, ExportButton.name, ImportDataPopup.name, Nodes.name, Characters.name
]);

export default guiComponentsModule;