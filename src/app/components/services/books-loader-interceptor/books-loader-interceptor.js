import angular from 'angular';
import booksLoaderInterceptorService from './books-loader-interceptor.service';
import WarlockOfFiretopMountain from './warlock-of-firetop-mountain/warlock-of-firetop-mountain';
import TempleOfTerror from './temple-of-terror/temple-of-terror';
import CreatureFromHavoc from './creature-from-havoc/creature-from-havoc';

/*@ngInject*/
let booksLoaderInterceptorModule = angular.module('app.components.services.books-loader-interceptor', [
        WarlockOfFiretopMountain.name, TempleOfTerror.name, CreatureFromHavoc.name
    ])
    .service('booksLoaderInterceptorService', booksLoaderInterceptorService);

export default booksLoaderInterceptorModule;