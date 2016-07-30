import angular from 'angular';
import gamesService from './games.service';

/*@ngInject*/
let gamesModule = angular.module('app.components.services.games', [])
    .service('gamesService', gamesService);

export default gamesModule;