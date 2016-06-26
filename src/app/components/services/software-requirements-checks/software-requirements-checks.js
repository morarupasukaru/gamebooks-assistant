import angular from 'angular';
import softwareRequirementsChecksService from './software-requirements-checks.service';

/*@ngInject*/
let softwareRequirementsChecksModule = angular.module('app.components.services.software-requirements-checks', [])

.service('softwareRequirementsChecksService', softwareRequirementsChecksService);

export default softwareRequirementsChecksModule;