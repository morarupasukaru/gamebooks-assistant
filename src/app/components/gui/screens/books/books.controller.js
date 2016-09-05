class BooksController {
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

        this.popupDeleteBookConfig = {
            id : 'popupDeleteGame',
            text : 'Are you sure to remove the selected book?',
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

    createBook() {
        this.$location.url(this.constants.url.bookDetail + '/create');
    }

    displayBook() {
        this.$location.url(this.constants.url.bookDetail + '/' + this.getSelectedRow().id);
    }

    displayRemoveBooksPopup() {
        this.popupService.show(this.popupDeleteBookConfig.id, this.callbackRemovePopup);
    }

    callbackRemovePopup(popupDomElementId, choice) {
        if (choice === this.constants.choices.yes) {
            this.deleteBook();
        }
    }

    deleteBook() {
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

export default BooksController;