class PopupController {
    /*@ngInject*/
    constructor(popupService, $translate) {
        this.cfg = JSON.parse(this.config);
        this.popupService = popupService;
        if (!!this.cfg.withoutTranslate) {
            this.cfg.textToDisplay = this.cfg.text;
        } else {
            this.cfg.textToDisplay = $translate.instant(this.cfg.text);
        }
    }

    select(choice) {
        this.close(choice);
    }

    close(choice) {
        this.popupService.close(this.cfg.id, choice);
    }
}

export default PopupController;