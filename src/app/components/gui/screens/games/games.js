import angular from 'angular';
import GamesList from './list/games-list';
import GameDetail from './detail/game-detail';

let gamesModule = angular.module('app.components.gui.screens.games', [
    GamesList.name, GameDetail.name
]);

export default gamesModule;