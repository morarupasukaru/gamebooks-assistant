let self;
class BooksService {

    /*@ngInject*/
    constructor(warlockOfFiretopMountainService, templeOfTerrorService, creatureFromHavocService, messagesService, $translate) {
        self = this;
        self.messagesService = messagesService;
        self.$translate = $translate;
        self.books = [];
        self.books.push(warlockOfFiretopMountainService.getBook());
        self.books.push(templeOfTerrorService.getBook());
        self.books.push(creatureFromHavocService.getBook());
    }

    getBooks() {
        return self.books;
    }

    getBook(bookUrlName) {
        let i;
        for (i = 0; i < self.books.length; i++) {
            if (bookUrlName === self.books[i].urlName) {
                return self.books[i];
            }
        }
        self.messagesService.errorMessage(self.$translate.instant('Cannot find book') + " '"  + bookUrlName + "'", false);
        return null;
    }
}

export default BooksService;