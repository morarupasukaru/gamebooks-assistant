let self;
class BooksService {

    /*@ngInject*/
    constructor(warlockService) {
        self = this;
        self.books = [];
        self.books.push(warlockService.getBook());
    }

    getBooks() {
        return self.books;
    }
}

export default BooksService;