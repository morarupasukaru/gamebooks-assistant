import angular from 'angular';
import languageAvailabilityCheckerService from './language-availability-checker.service';

let languageAvailabilityCheckerModule = angular.module('app.components.services.language-availability-checker', [])

.service('languageAvailabilityCheckerService', languageAvailabilityCheckerService);

export default languageAvailabilityCheckerModule;