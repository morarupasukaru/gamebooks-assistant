import angular from 'angular';
import service from './remote-json-retriever.service';

let remoteJsonRetrieverModule = angular.module('app.components.services.remote-json-retriever', [])

.service('remoteJsonRetrieverService', service);

export default remoteJsonRetrieverModule;