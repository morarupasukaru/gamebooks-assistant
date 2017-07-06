import angular from 'angular';
import Dices from './dices/dices';
import Messages from './messages/messages';
import BackButton from './back-button/back-button';
import Nodes from './nodes/nodes';
import Node from './node/node';
import Characters from './characters/characters';
import List from './list/list';
import Description from './description/description';
import Goto from './goto/goto';
import Collapse from './collapse/collapse';
import SelectableList from './selectable-list/selectable-list';
import Toolbar from './toolbar/toolbar';

let guiComponentsModule = angular.module('app.components.gui.components', [
    Dices.name,
    Messages.name,
    BackButton.name,
    Nodes.name,
    Node.name,
    Characters.name,
    List.name,
    Description.name,
    Goto.name,
    Collapse.name,
    SelectableList.name,
    Toolbar.name
]);

export default guiComponentsModule;