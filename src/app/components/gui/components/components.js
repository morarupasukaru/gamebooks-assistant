import angular from 'angular';
import Dices from './dices/dices';
import Messages from './messages/messages';
import Popup from './popup/popup';
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
import SelectableList from './selectable-list/selectable-list';
import Footnote from './footnote/footnote';
import About from './about/about';

let guiComponentsModule = angular.module('app.components.gui.components', [
    Dices.name,
    Messages.name,
    Popup.name,
    BackButton.name,
    ExportButton.name,
    ImportDataPopup.name,
    Nodes.name,
    Node.name,
    Characters.name,
    List.name,
    Description.name,
    Goto.name,
    Collapse.name,
    SelectableList.name,
    Footnote.name,
    About.name
]);

export default guiComponentsModule;