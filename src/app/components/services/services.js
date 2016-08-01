import angular from 'angular';
import LanguageAvailabilityChecker from './language-availability-checker/language-availability-checker';
import SoftwareRequirementsChecker from './software-requirements-checker/software-requirements-checker';
import PreScreenLoadingInterceptorsCaller from './pre-screen-loading-interceptors-caller/pre-screen-loading-interceptors-caller';
import Persistence from './persistence/persistence';
import Dices from './dices/dices';
import Books from './books/books';
import Games from './games/games';
import SaveScreenUrlInterceptor from './save-screen-url-interceptor/save-screen-url-interceptor';

let servicesModule = angular.module('app.components.services', [
    SoftwareRequirementsChecker.name, Persistence.name, Dices.name, LanguageAvailabilityChecker.name, PreScreenLoadingInterceptorsCaller.name, Books.name, Games.name, SaveScreenUrlInterceptor.name
]);

export default servicesModule;