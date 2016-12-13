import angular from 'angular';
import Home from './home/home';
import Games from './games/games';
import Battle from './battle/battle';
import Administration from './administration/administration';
import About from './about/about';
import Adventures from './adventures/adventures';
import Libraries from './libraries/libraries';
import I18n from './i18n/i18n';
import ImportProjectAon from './import-projectaon/import-projectaon';

let screensModule = angular.module('app.components.gui.screens', [
    Home.name, Games.name, Battle.name, Administration.name, About.name, Adventures.name, Libraries.name, I18n.name, ImportProjectAon.name
]);

export default screensModule;