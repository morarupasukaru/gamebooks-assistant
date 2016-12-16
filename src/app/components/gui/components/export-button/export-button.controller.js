class ExportButtonController {
    /*@ngInject*/
    constructor($timeout, $window) {
        this.$timeout = $timeout;
        this.$window = $window;
    }

    download() {
        this.exportDownloadBlobUrl = this.createDownloadBlobUrl(this.data);
        this.$timeout(function() {
            let href = window.document.getElementById('linkDownload');
            href.click();
        });
    }

    createDownloadBlobUrl(data) {
        let blob = new Blob([data], { type: 'text/plain' });
        let url = this.$window.URL || this.$window.webkitURL;
        return url.createObjectURL(blob);
    }
}

export default ExportButtonController;