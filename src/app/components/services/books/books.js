import angular from 'angular';
import booksService from './books.service';
import WarlockOfFiretopMountain from './warlock-of-firetop-mountain/warlock-of-firetop-mountain';
import TempleOfTerror from './temple-of-terror/temple-of-terror';
import CreatureFromHavoc from './creature-from-havoc/creature-from-havoc';

/*@ngInject*/
let booksModule = angular.module('app.components.services.books', [
        WarlockOfFiretopMountain.name, TempleOfTerror.name, CreatureFromHavoc.name
    ])
    .service('booksService', booksService);

export default booksModule;