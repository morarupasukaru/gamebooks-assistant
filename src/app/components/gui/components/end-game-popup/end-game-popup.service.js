let self;
class EndGamePopupService {

    /*@ngInject*/
    constructor(constants) {
        self = this;
        self.constants = constants;
        self.popups = {};
    }

    show(popupDomElementId, callback) {
        let modalElement = window.document.getElementById(popupDomElementId);
        modalElement.style.display = "block";

        self.popups[popupDomElementId] = callback;
    }

    close(popupDomElementId, choice, endGameReason) {
        let modalElement = window.document.getElementById(popupDomElementId);
        modalElement.style.display = "none";

        let callback = self.popups[popupDomElementId];
        if (!!callback && choice === self.constants.choices.yes) {
            callback(popupDomElementId, endGameReason);
        }
        delete self.popups[popupDomElementId];
    }
}

export default EndGamePopupService;