class AdventuresListController {
    /*@ngInject*/
    constructor($location, preScreenLoadingInterceptorsCallerService, constants, gamePersistenceService, bookPersistenceService, messagesService, $translate, popupService) {
        this.constants = constants;
        preScreenLoadingInterceptorsCallerService.intercept();
        this.$location = $location;
        this.gamePersistenceService = gamePersistenceService;
        this.bookPersistenceService = bookPersistenceService;
        this.messagesService = messagesService;
        this.$translate = $translate;
        this.popupService = popupService;

        this.popupDeleteAdventureConfig = {
            id : 'popupDeleteAdventure',
            text : 'Are you sure to remove the selected adventure?',
            choices : [constants.choices.yes, constants.choices.no],
            withCloseButton : false,
            closeOnClickOutsideModal : false
        };

        this.initData();
    }

    initData() {
        this.rows = this.bookPersistenceService.getBooksOverview();
    }

    select(row) {
        for (let i = 0; i < this.rows.length; i++) {
            this.rows[i].selected = false;
        }
        row.selected = true;
    }

    create() {
        this.$location.url(this.constants.url.adventureDetail + '/create');
    }

    display() {
        this.$location.url(this.constants.url.adventureDetail + '/' + this.getSelectedRow().id);
    }

    displayRemoveAdventurePopup() {
        this.popupService.show(this.popupDeleteAdventureConfig.id, this.callbackRemovePopup);
    }

    callbackRemovePopup(popupDomElementId, choice) {
        if (choice === this.constants.choices.yes) {
            this.deleteAdventure();
        }
    }

    deleteAdventure() {
        this.bookPersistenceService.deleteBookAndParagraphs(this.getSelectedRow().id);
        this.initData();
    }

    hasSelectedRow() {
        return !!this.getSelectedRow();
    }


    getSelectedRow() {
        if (!!this.rows) {
            for (let i = 0; i < this.rows.length; i++) {
                if (!!this.rows[i].selected) {
                    return this.rows[i];
                }
            }
        }
        return null;
    }
}

export default AdventuresListController;