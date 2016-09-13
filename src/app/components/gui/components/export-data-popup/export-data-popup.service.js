class ExportDataPopupService {

    /*@ngInject*/
    constructor(constants, $window) {
        this.constants = constants;
        this.$window = $window;
        this.popups = {};
    }

    show(popupDomElementId, callback) {
        let modalElement = window.document.getElementById(popupDomElementId);
        modalElement.style.display = "block";

        this.popups[popupDomElementId] = callback;
    }

    createDownloadBlobUrl(data) {
        let blob = new Blob([data], { type: 'text/plain' });
        let url = this.$window.URL || this.$window.webkitURL;
        return url.createObjectURL(blob);
    }

    close(popupDomElementId, choice, endGameReason) {
        let modalElement = window.document.getElementById(popupDomElementId);
        modalElement.style.display = "none";

        let callback = this.popups[popupDomElementId];
        if (!!callback && choice === this.constants.choices.ok) {
            callback(popupDomElementId, choice);
        }
        delete this.popups[popupDomElementId];
    }
}

export default ExportDataPopupService;