let self;
class BooksService {

    /*@ngInject*/
    constructor(warlockOfFiretopMountainService) {
        self = this;
        self.books = [];
        self.books.push(warlockOfFiretopMountainService.getBook());
    }

    getBooks() {
        return self.books;
    }
}

export default BooksService;