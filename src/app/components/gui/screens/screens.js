import angular from 'angular';
import Home from './home/home';
import Games from './games/games';
import Administration from './administration/administration';
import About from './about/about';
import Adventures from './adventures/adventures';
import Libraries from './libraries/libraries';

let screensModule = angular.module('app.components.gui.screens', [
    Home.name, Games.name, Administration.name, About.name, Adventures.name, Libraries.name
]);

export default screensModule;