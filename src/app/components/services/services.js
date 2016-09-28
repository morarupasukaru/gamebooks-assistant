import angular from 'angular';
import LanguageAvailabilityChecker from './language-availability-checker/language-availability-checker';
import SoftwareRequirementsChecker from './software-requirements-checker/software-requirements-checker';
import PreScreenLoadingInterceptorsCaller from './pre-screen-loading-interceptors-caller/pre-screen-loading-interceptors-caller';
import Persistence from './persistence/persistence';
import Dices from './dices/dices';
import FormHelper from './form-helper/form-helper';
import RemoteJsonRetriever from './remote-json-retriever/remote-json-retriever';

let servicesModule = angular.module('app.components.services', [
    SoftwareRequirementsChecker.name, Persistence.name, Dices.name, LanguageAvailabilityChecker.name, PreScreenLoadingInterceptorsCaller.name, FormHelper.name, RemoteJsonRetriever.name
]);

export default servicesModule;