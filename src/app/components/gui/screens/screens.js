import angular from 'angular';
import Home from './home/home';
import Games from './games/games';
import Battle from './battle/battle';
import Administration from './administration/administration';
import ChooseLanguage from './choose-language/choose-language';
import About from './about/about';
import Adventures from './adventures/adventures';
import Libraries from './libraries/libraries';

let screensModule = angular.module('app.components.gui.screens', [
    Home.name, Games.name, Battle.name, Administration.name, ChooseLanguage.name, About.name, Adventures.name, Libraries.name
]);

export default screensModule;