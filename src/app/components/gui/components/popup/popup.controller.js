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

    select(choice, text) {
        if (!!this.cfg.withText && !text) {
            return ;
        }
        this.close(choice, text);
    }

    close(choice, text) {
        this.popupService.close(this.cfg.id, choice, text);
    }
}

export default PopupController;