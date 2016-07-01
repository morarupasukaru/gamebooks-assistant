import angular from 'angular';
import preScreenLoadingInterceptorsCallerService from './pre-screen-loading-interceptors-caller.service';

/*@ngInject*/
let preScreenLoadingInterceptorsCallerModule = angular.module('app.components.services.pre-screen-loading-interceptors-caller', [])

.service('preScreenLoadingInterceptorsCallerService', preScreenLoadingInterceptorsCallerService);

export default preScreenLoadingInterceptorsCallerModule;