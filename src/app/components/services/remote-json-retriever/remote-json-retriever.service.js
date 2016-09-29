class RemoteJsonRetrieverService {

    /*@ngInject*/
    constructor($http, $q) {
        this.$http = $http;
        this.$q = $q;
    }

    retrieveJson(jsonUrl) {
        let deferred = this.$q.defer();
        let that = this;
        this.$http.get(jsonUrl).then(
            function successCallback(response) {
                if (!!response && !!response.data) {
                    deferred.resolve(response.data);
                } else {
                    deferred.reject('Cannot get data from ' + jsonUrl);
                }
            },
            function errorCallback(response) {
                deferred.reject('Cannot get data from ' + jsonUrl);
            }
        );
        return deferred.promise;
    }
}

export default RemoteJsonRetrieverService;