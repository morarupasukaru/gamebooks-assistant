import angular from 'angular';
import AdventureDetail from './detail/adventure-detail';

let adventuresModule = angular.module('app.components.gui.screens.adventures', [
    AdventureDetail.name
]);

export default adventuresModule;