import angular from 'angular';
import formHelperService from './form-helper.service';

let formHelperModule = angular.module('app.components.services.form-helper', [])

.service('formHelperService', formHelperService);

export default formHelperModule;