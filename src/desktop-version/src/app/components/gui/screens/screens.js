import angular from 'angular';
import Home from './home/home';
import Games from './games/games';
import Administration from './administration/administration';
import Credits from './credits/credits';
import Adventures from './adventures/adventures';
import LibraryImport from './library-import/library-import';

let screensModule = angular.module('app.components.gui.screens', [
    Home.name, Games.name, Administration.name, Adventures.name, LibraryImport.name, Credits.name
]);

export default screensModule;