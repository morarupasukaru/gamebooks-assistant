import angular from 'angular';
import softwareRequirementsCheckerService from './software-requirements-checker.service';

let softwareRequirementsCheckerModule = angular.module('app.components.services.software-requirements-checker', [])

.service('softwareRequirementsCheckerService', softwareRequirementsCheckerService);

export default softwareRequirementsCheckerModule;