import angular from 'angular';
import softwareRequirementsCheckerService from './software-requirements-checker.service';

/*@ngInject*/
let softwareRequirementsCheckerModule = angular.module('app.components.services.software-requirements-checker', [])

.service('softwareRequirementsCheckerService', softwareRequirementsCheckerService);

export default softwareRequirementsCheckerModule;