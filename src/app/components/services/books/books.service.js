let self;
class BooksService {

    /*@ngInject*/
    constructor(warlockOfFiretopMountainEnglishService) {
        self = this;
        this.warlockOfFiretopMountainEnglishService = warlockOfFiretopMountainEnglishService;
        this.books = [];
        this.initData();
    }

    initData() {
        let book = this.warlockOfFiretopMountainEnglishService.getBook();
        this.books.push(book);
        this.indexParagraphs(book);
    }

    indexParagraphs(book) {
        this.mapBookParagraphs = [];
        for (let i = 0; i < book.paragraphs.length; i++) {
            let mapParagraphs = this.mapBookParagraphs[book.id];
            if (!mapParagraphs) {
                mapParagraphs = [];
                this.mapBookParagraphs[book.id] = mapParagraphs;
            }
            mapParagraphs[new Number(book.paragraphs[i].paragraphNr)] = book.paragraphs[i];
        }
    }

    getBooks() {
        return this.books;
    }

    getParagraph(bookId, paragraphNr) {
        return this.mapBookParagraphs[bookId][new Number(paragraphNr)];
    }

    getBook(bookId) {
        for (let i = 0; i < this.books.length; i++) {
            if (bookId === this.books[i].id) {
                return this.books[i];
            }
        }
        return null;
    }
}

export default BooksService;