import angular from 'angular';
import LibrariesList from './list/libraries-list';

let librariesModule = angular.module('app.components.gui.screens.libraries', [
    LibrariesList.name
]);

export default librariesModule;