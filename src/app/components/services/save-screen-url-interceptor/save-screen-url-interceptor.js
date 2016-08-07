import angular from 'angular';
import saveScreenUrlInterceptorService from './save-screen-url-interceptor.service';

/*@ngInject*/
let saveScreenUrlInterceptorModule = angular.module('app.components.services.save-screen-url-interceptor', [])

.service('saveScreenUrlInterceptorService', saveScreenUrlInterceptorService);

export default saveScreenUrlInterceptorModule;