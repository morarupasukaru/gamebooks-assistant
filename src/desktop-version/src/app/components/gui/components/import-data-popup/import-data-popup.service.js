class ImportDataPopupService {

    /*@ngInject*/
    constructor(constants) {
        this.constants = constants;
        this.popups = {};
    }

    show(popupDomElementId, callback) {
        let modalElement = window.document.getElementById(popupDomElementId);
        modalElement.style.display = "block";

        this.popups[popupDomElementId] = callback;
    }

    close(popupDomElementId, choice, data) {
        let modalElement = window.document.getElementById(popupDomElementId);
        modalElement.style.display = "none";

        let callback = this.popups[popupDomElementId];
        if (!!callback && choice === this.constants.choices.ok) {
            callback(popupDomElementId, data);
        }
        delete this.popups[popupDomElementId];
    }
}

export default ImportDataPopupService;