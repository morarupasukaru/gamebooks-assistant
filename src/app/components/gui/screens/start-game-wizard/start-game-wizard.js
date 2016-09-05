import angular from 'angular';
import SelectAdventure from './select-adventure/select-adventure';
import CreatePlayer from './create-player/create-player';
import ChooseItems from './choose-items/choose-items';

let startGameWizardScreenModule = angular.module('app.components.gui.screens.start-game-wizard', [
    SelectAdventure.name, CreatePlayer.name, ChooseItems.name
]);

export default startGameWizardScreenModule;