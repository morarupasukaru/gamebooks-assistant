import angular from 'angular';
import Dices from './dices/dices';
import Messages from './messages/messages';
import Navbar from './navbar/navbar';
import Popup from './popup/popup';
import Items from './items/items';
import Stats from './stats/stats';
import Paragraph from './paragraph/paragraph';
import BackButton from './back-button/back-button';
import ExportDataPopup from './export-data-popup/export-data-popup';
import ImportDataPopup from './import-data-popup/import-data-popup';
import Nodes from './nodes/nodes';

let guiComponentsModule = angular.module('app.components.gui.components', [
    Dices.name, Messages.name, Navbar.name, Popup.name, Items.name, Stats.name, Paragraph.name, BackButton.name, ExportDataPopup.name, ImportDataPopup.name, Nodes.name
]);

export default guiComponentsModule;