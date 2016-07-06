let self;
class BooksService {

    /*@ngInject*/
    constructor() {
        self = this;
        self.books = [];
    }

    getBooks() {
        return self.books;
    }
}

export default BooksService;