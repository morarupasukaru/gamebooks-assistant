import angular from 'angular';
import LibrariesList from './list/libraries-list';
import LibraryDetail from './detail/library-detail';

let librariesModule = angular.module('app.components.gui.screens.libraries', [
    LibrariesList.name, LibraryDetail.name
]);

export default librariesModule;