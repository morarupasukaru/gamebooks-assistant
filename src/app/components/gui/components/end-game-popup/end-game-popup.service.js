let self;
class EndGamePopupService {

    /*@ngInject*/
    constructor() {
        self = this;
        self.popups = {};
    }

    show(popupDomElementId, callback) {
        let modalElement = window.document.getElementById(popupDomElementId);
        modalElement.style.display = "block";

        self.popups[popupDomElementId] = callback;
    }

    close(popupDomElementId, choice) {
        let modalElement = window.document.getElementById(popupDomElementId);
        modalElement.style.display = "none";

        let callback = self.popups[popupDomElementId];
        if (!!callback) {
            callback(popupDomElementId, choice);
        }
        delete self.popups[popupDomElementId];
    }
}

export default EndGamePopupService;