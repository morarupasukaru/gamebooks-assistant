import angular from 'angular';
import Games from './games/games';
import Administration from './administration/administration';
import Credits from './credits/credits';
import Adventures from './adventures/adventures';
import Libraries from './libraries/libraries';

let screensModule = angular.module('app.components.gui.screens', [
    Games.name, Administration.name, Adventures.name, Libraries.name, Credits.name
]);

export default screensModule;