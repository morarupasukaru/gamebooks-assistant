let self;
class BooksService {

    /*@ngInject*/
    constructor(warlockOfFiretopMountainService, templeOfTerrorService, creatureFromHavocService) {
        self = this;
        self.books = [];
        self.books.push(warlockOfFiretopMountainService.getBook());
        self.books.push(templeOfTerrorService.getBook());
        self.books.push(creatureFromHavocService.getBook());
    }

    getBooks() {
        return self.books;
    }

    getBook(bookName) {
        let i;
        for (i = 0; i < self.books.length; i++) {
            if (bookName === self.books[i].name) {
                return self.books[i];
            }
        }
        return null;
    }
}

export default BooksService;