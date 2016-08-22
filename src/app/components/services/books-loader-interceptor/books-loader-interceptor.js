import angular from 'angular';
import booksLoaderInterceptorService from './books-loader-interceptor.service';

let booksLoaderInterceptorModule = angular.module('app.components.services.books-loader-interceptor', [])
    .service('booksLoaderInterceptorService', booksLoaderInterceptorService);

export default booksLoaderInterceptorModule;