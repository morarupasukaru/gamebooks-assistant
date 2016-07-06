import angular from 'angular';
import booksService from './books.service';

/*@ngInject*/
let booksModule = angular.module('app.components.services.books', [])
    .service('booksService', booksService);

export default booksModule;