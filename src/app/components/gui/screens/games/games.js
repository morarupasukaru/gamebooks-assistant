import angular from 'angular';
import GamesList from './list/games-list';
import GameDetail from './detail/game-detail';
import GameCreate from './create/create-game-wizard';

let gamesModule = angular.module('app.components.gui.screens.games', [
    GamesList.name, GameDetail.name, GameCreate.name
]);

export default gamesModule;