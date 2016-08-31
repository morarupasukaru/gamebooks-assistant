let self;
class BooksController {
    /*@ngInject*/
    constructor($location, preScreenLoadingInterceptorsCallerService, constants, gamePersistenceService, bookPersistenceService, messagesService, $translate, popupService) {
        self = this;
        self.constants = constants;
        preScreenLoadingInterceptorsCallerService.intercept();
        self.$location = $location;
        self.gamePersistenceService = gamePersistenceService;
        self.bookPersistenceService = bookPersistenceService;
        self.messagesService = messagesService;
        self.$translate = $translate;
        self.popupService = popupService;

        self.popupDeleteBookConfig = {
            id : 'popupDeleteGame',
            text : 'Are you sure to remove the selected book?',
            choices : [constants.choices.yes, constants.choices.no],
            withCloseButton : false,
            closeOnClickOutsideModal : false
        };

        this.initData();
    }

    initData() {
        self.rows = self.bookPersistenceService.getBooksOverview();
    }

    select(row) {
        for (let i = 0; i < self.rows.length; i++) {
            self.rows[i].selected = false;
        }
        row.selected = true;
    }

    createBook() {
        self.$location.url(self.constants.url.bookDetail + '/create');
    }

    displayBook() {
        self.$location.url(self.constants.url.bookDetail + '/' + self.getSelectedRow().id);
    }

    displayRemoveBooksPopup() {
        self.popupService.show(self.popupDeleteBookConfig.id, self.callbackRemovePopup);
    }

    callbackRemovePopup(popupDomElementId, choice) {
        if (choice === self.constants.choices.yes) {
            self.deleteBook();
        }
    }

    deleteBook() {
        self.bookPersistenceService.deleteBook(self.getSelectedRow().id);
        self.initData();
    }

    hasSelectedRow() {
        return !!self.getSelectedRow();
    }


    getSelectedRow() {
        if (!!self.rows) {
            for (let i = 0; i < self.rows.length; i++) {
                if (!!self.rows[i].selected) {
                    return self.rows[i];
                }
            }
        }
        return null;
    }
}

export default BooksController;