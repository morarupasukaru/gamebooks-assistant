import angular from 'angular';
import Persistence from './persistence/persistence';
import Dices from './dices/dices';
import FormHelper from './form-helper/form-helper';
import RemoteJsonRetriever from './remote-json-retriever/remote-json-retriever';

let servicesModule = angular.module('app.components.services', [
    Persistence.name, Dices.name, FormHelper.name, RemoteJsonRetriever.name
]);

export default servicesModule;