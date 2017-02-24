class PopupService {

    /*@ngInject*/
    constructor() {
        this.popups = {};
    }

    show(popupDomElementId, callback) {
        let modalElement = window.document.getElementById(popupDomElementId);
        modalElement.style.display = "block";

        this.popups[popupDomElementId] = callback;
    }

    close(popupDomElementId, choice, text) {
        let modalElement = window.document.getElementById(popupDomElementId);
        modalElement.style.display = "none";

        let callback = this.popups[popupDomElementId];
        if (!!callback) {
            callback(popupDomElementId, choice, text);
        }
        delete this.popups[popupDomElementId];
    }
}

export default PopupService;