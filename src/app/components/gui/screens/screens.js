import angular from 'angular';
import Home from './home/home';
import Games from './games/games';
import Battle from './battle/battle';
import Configuration from './configuration/configuration';
import ChooseLanguage from './choose-language/choose-language';
import StartGameWizard from './start-game-wizard/start-game-wizard';
import InGame from './in-game/in-game';
import About from './about/about';
import DeleteData from './delete-data/delete-data';


let screensModule = angular.module('app.components.gui.screens', [
    Home.name, Games.name, Battle.name, Configuration.name, ChooseLanguage.name, StartGameWizard.name, InGame.name, About.name, DeleteData.name
]);

export default screensModule;