import angular from 'angular';
import LanguageAvailabilityChecker from './language-availability-checker/language-availability-checker';
import SoftwareRequirementsChecker from './software-requirements-checker/software-requirements-checker';
import PreScreenLoadingInterceptorsCaller from './pre-screen-loading-interceptors-caller/pre-screen-loading-interceptors-caller';
import Persistence from './persistence/persistence';
import Dices from './dices/dices';

let servicesModule = angular.module('app.components.services', [
    SoftwareRequirementsChecker.name, Persistence.name, Dices.name, LanguageAvailabilityChecker.name, PreScreenLoadingInterceptorsCaller.name
]);

export default servicesModule;