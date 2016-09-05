import angular from 'angular';
import Home from './home/home';
import Games from './games/games';
import Battle from './battle/battle';
import Administration from './administration/administration';
import ChooseLanguage from './choose-language/choose-language';
import StartGameWizard from './start-game-wizard/start-game-wizard';
import InGame from './in-game/in-game';
import About from './about/about';
import Adventures from './adventures/adventures';

let screensModule = angular.module('app.components.gui.screens', [
    Home.name, Games.name, Battle.name, Administration.name, ChooseLanguage.name, StartGameWizard.name, InGame.name, About.name, Adventures.name
]);

export default screensModule;