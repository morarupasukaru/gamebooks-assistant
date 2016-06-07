import Dices from './dices/dices';
import Export from './export/export';
import Gamebooks from './gamebooks/gamebooks';
import Gameplays from './gameplays/gameplays';
import Import from './import/import';
import Items from './items/items';
import Notes from './notes/notes';
import Paths from './paths/paths';
import Stats from './stats/stats';

let gamebookModule = angular.module('app.components.gamebook', [
    Dices.name, Export.name, Gamebooks.name, Gameplays.name, Import.name, Items.name, Notes.name, Paths.name, Stats.name
]);

export default gamebookModule;