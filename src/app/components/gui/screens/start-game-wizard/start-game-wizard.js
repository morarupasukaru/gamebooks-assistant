import angular from 'angular';
import SelectBook from './select-book/select-book';
import CreatePlayer from './create-player/create-player';
import DisplayStartParagraph from './display-start-paragraph/display-start-paragraph';

let startGameWizardScreenModule = angular.module('app.components.gui.screens.start-game-wizard', [
    SelectBook.name, CreatePlayer.name, DisplayStartParagraph.name
]);

export default startGameWizardScreenModule;