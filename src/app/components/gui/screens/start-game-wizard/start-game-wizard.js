import angular from 'angular';
import SelectBook from './select-book/select-book';
import CreatePlayer from './create-player/create-player';
import ChooseItems from './choose-items/choose-items';

let startGameWizardScreenModule = angular.module('app.components.gui.screens.start-game-wizard', [
    SelectBook.name, CreatePlayer.name, ChooseItems.name
]);

export default startGameWizardScreenModule;