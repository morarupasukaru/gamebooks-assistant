class ImportProjectAeonController {
    /*@ngInject*/
    constructor(preScreenLoadingInterceptorsCallerService, $http, messagesService, $translate) {
        preScreenLoadingInterceptorsCallerService.intercept();
        this.$http = $http;
        this.messagesService = messagesService;
        this.$translate = $translate;
    }

    import() {
    /*
        let request = new XMLHttpRequest();
        debugger;
        request.open("GET", this.projectaonUrl, false);
        request.send(null);

        let doc = document.implementation.createHTMLDocument("projectaonBook");
        doc.documentElement.innerHTML = request.responseText;
        */
        let that = this;
        this.$http.get(this.projectaonUrl).then(
            function successCallback(response) {
                debugger;
                if (!!response && !!response.data) {
                    that.bookContent = response.data;
                } else {
                    that.messagesService.errorMessage(that.$translate.instant('CannotImportProjectAon', {url: that.projectaonUrl }), true);
                }
            },
            function errorCallback(response) {
                debugger;
                that.messagesService.errorMessage(that.$translate.instant('CannotImportProjectAon', {url: that.projectaonUrl }), true);
            }
        );
    }
}

export default ImportProjectAeonController;