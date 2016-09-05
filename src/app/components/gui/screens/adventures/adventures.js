import angular from 'angular';
import AdventuresList from './list/adventures-list';
import AdventureDetail from './detail/adventure-detail';

let adventuresModule = angular.module('app.components.gui.screens.adventures', [
    AdventuresList.name, AdventureDetail.name
]);

export default adventuresModule;