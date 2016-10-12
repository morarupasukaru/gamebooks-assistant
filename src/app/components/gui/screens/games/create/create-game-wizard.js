import angular from 'angular';
import SelectAdventure from './select-adventure/select-adventure';
import CreatePlayer from './create-player/create-player';
import ChooseItems from './choose-items/choose-items';
import createGameService from './create-game.service';

let createGameWizardModule = angular.module('app.components.gui.screens.games.create', [
    SelectAdventure.name, CreatePlayer.name, ChooseItems.name]
    ).service('createGameService', createGameService);


export default createGameWizardModule;