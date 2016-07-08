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
}

export default BooksService;