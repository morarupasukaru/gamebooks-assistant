import angular from 'angular';
import Persistence from './persistence/persistence';
import Dices from './dices/dices';
import FormHelper from './form-helper/form-helper';
import RemoteJsonRetriever from './remote-json-retriever/remote-json-retriever';
import LanguagePicker from './language-picker/language-picker';

let servicesModule = angular.module('app.components.services', [
    Persistence.name, Dices.name, FormHelper.name, RemoteJsonRetriever.name, LanguagePicker.name
]);

export default servicesModule;