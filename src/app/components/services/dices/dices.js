import angular from 'angular';
import dicesService from './dices.service';

/*@ngInject*/
let dicesModule = angular.module('app.components.services.dices', [])

.service('dicesService', dicesService);

export default dicesModule;