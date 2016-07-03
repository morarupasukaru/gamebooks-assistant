import angular from 'angular';
import Home from './home/home';
import Export from './export/export';
import Games from './games/games';
import Import from './import/import';
import Items from './items/items';
import Notes from './notes/notes';
import Paths from './paths/paths';
import Stats from './stats/stats';
import Battle from './battle/battle';
import Paragraph from './paragraph/paragraph';
import Configuration from './configuration/configuration';
import ChooseLanguage from './choose-language/choose-language';
import TestPopup from './test-popup/test-popup';


let screensModule = angular.module('app.components.gui.screens', [
    Home.name, Export.name, Games.name, Import.name, Items.name, Notes.name, Paths.name, Stats.name, Battle.name, Paragraph.name, Configuration.name, ChooseLanguage.name, TestPopup.name
]);

export default screensModule;