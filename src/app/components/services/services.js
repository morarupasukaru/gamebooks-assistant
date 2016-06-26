import angular from 'angular';
import SoftwareRequirementsChecks from './software-requirements-checks/software-requirements-checks';
import Persistence from './persistence/persistence';
import Dices from './dices/dices';

let servicesModule = angular.module('app.components.services', [
    SoftwareRequirementsChecks.name, Persistence.name, Dices.name
]);

export default servicesModule;