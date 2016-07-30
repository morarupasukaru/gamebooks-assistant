let self;
class BooksService {

    /*@ngInject*/
    constructor(warlockOfFiretopMountainService, templeOfTerrorService, creatureFromHavocService, messagesService, $translate, constants) {
        self = this;
        self.messagesService = messagesService;
        self.$translate = $translate;
        self.constants = constants;
        self.books = [];
        self.books.push(warlockOfFiretopMountainService.getBook());
        self.books.push(templeOfTerrorService.getBook());
        self.books.push(creatureFromHavocService.getBook());
    }

    getBooks() {
        return self.books;
    }

    getParagraph(bookUrlName, paragraphNr) {
        let book = self.getBook(bookUrlName);
        if (!!book) {
            if (!!book.paragraphs) {
                let i;
                for (i = 0; i < book.paragraphs.length; i++) {
                    // use type coersion
                    if (paragraphNr == book.paragraphs[i].paragraphNr) {
                        return book.paragraphs[i];
                    }
                }
            }
            return self.createNewParagraph(paragraphNr);
        }
    }

    createNewParagraph(paragraphNr) {
        return {
            version : self.constants.version,
            paragraphNr : paragraphNr,
            description : '',
            choices : []
        };
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