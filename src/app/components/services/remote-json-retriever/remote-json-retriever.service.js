class RemoteJsonRetrieverService {

    /*@ngInject*/
    constructor($http, messagesService) {
        this.$http = $http;
        this.messagesService = messagesService;
    }

    retrieveJson(jsonUrl) {
        let that = this;
        this.$http.get(jsonUrl).then(
            function successCallback(response) {
                // this callback will be called asynchronously
                // when the response is available
                let jsonString = response.data;
                that.messagesService.successMessage('Got data from ' + jsonUrl, false);
            },
            function errorCallback(response) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
                that.messagesService.errorMessage('Cannot get data from ' + jsonUrl, false);
            }
        );
    }
}

export default RemoteJsonRetrieverService;