let self;
class SelectBookController {
    /*@ngInject*/
    constructor(preScreenLoadingInterceptorsCallerService, booksService) {
        self = this;
        preScreenLoadingInterceptorsCallerService.intercept();
        this.books = booksService.getBooks();
    }

    getBooks() {
        return self.books;
    }
}

export default SelectBookController;