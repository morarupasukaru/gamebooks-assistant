import angular from 'angular';
import Dices from './dices/dices';
import Messages from './messages/messages';
import Navbar from './navbar/navbar';
import Popup from './popup/popup';
import Stats from './stats/stats';
import Paragraph from './paragraph/paragraph';
import BackButton from './back-button/back-button';
import ExportButton from './export-button/export-button';
import ImportDataPopup from './import-data-popup/import-data-popup';
import Nodes from './nodes/nodes';
import Node from './node/node';
import Characters from './characters/characters';
import List from './list/list';
import Description from './description/description';
import Goto from './goto/goto';
import Collapse from './collapse/collapse';

let guiComponentsModule = angular.module('app.components.gui.components', [
    Dices.name,
    Messages.name,
    Navbar.name,
    Popup.name,
    Stats.name,
    Paragraph.name,
    BackButton.name,
    ExportButton.name,
    ImportDataPopup.name,
    Nodes.name,
    Node.name,
    Characters.name,
    List.name,
    Description.name,
    Goto.name,
    Collapse.name
]);

export default guiComponentsModule;