import angular from 'angular';
import predefinedDataLoaderService from './predefined-data-loader.service';

let predefinedDataLoaderModule = angular.module('app.components.services.predefined-data-loader', [])

.service('predefinedDataLoaderService', predefinedDataLoaderService);

export default predefinedDataLoaderModule;