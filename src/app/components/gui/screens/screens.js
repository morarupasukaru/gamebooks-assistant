import angular from 'angular';
import Home from './home/home';
import Export from './export/export';
import Gameplays from './gameplays/gameplays';
import Import from './import/import';
import Items from './items/items';
import Notes from './notes/notes';
import Paths from './paths/paths';
import Stats from './stats/stats';
import Battle from './battle/battle';
import Paragraph from './paragraph/paragraph';

let screensModule = angular.module('app.components.gui.screens', [
    Home.name, Export.name, Gameplays.name, Import.name, Items.name, Notes.name, Paths.name, Stats.name, Battle.name, Paragraph.name
]);

export default screensModule;