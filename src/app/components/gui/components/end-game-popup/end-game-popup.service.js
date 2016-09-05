class EndGamePopupService {

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

    close(popupDomElementId, choice, endGameReason) {
        let modalElement = window.document.getElementById(popupDomElementId);
        modalElement.style.display = "none";

        let callback = this.popups[popupDomElementId];
        if (!!callback && choice === this.constants.choices.yes) {
            callback(popupDomElementId, endGameReason);
        }
        delete this.popups[popupDomElementId];
    }
}

export default EndGamePopupService;