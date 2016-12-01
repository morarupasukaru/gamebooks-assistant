class ImportProjectAeonController {
    /*@ngInject*/
    constructor(preScreenLoadingInterceptorsCallerService, $http, messagesService, $translate, adventurePersistenceService) {
        preScreenLoadingInterceptorsCallerService.intercept();
        this.$http = $http;
        this.messagesService = messagesService;
        this.$translate = $translate;
        this.adventurePersistenceService = adventurePersistenceService;
        this.projectaonUrl = 'Flight from the Dark.htm';
        this.import();
    }

    import() {
        let request = new XMLHttpRequest();
        request.open("GET", this.projectaonUrl, false);
        request.send(null);
        this.bookRawContent = request.responseText;
        let bookDocument = document.implementation.createHTMLDocument("projectaonBook");
        bookDocument.documentElement.innerHTML = request.responseText;
        this.parse(bookDocument);

    }

    parse(bookDocument) {
        this.nodes = "[";
        let anchors = this.getParagraphAnchors(bookDocument);
        for (let i = 0; i < anchors.length; i++) {
            let paragraph = this.getParagraphData(anchors[i]);
            this.nodes = this.nodes + JSON.stringify(paragraph) + ",\n";
        }
        this.nodes = this.nodes + "]";
        let title = this.getTitle(bookDocument);
        let book = {
            name: title,
            id: this.adventurePersistenceService.getAdventureIdFromAdventureName(title),
            paragraphs: this.nodes
        };

        this.bookParsedContent = '';
        let keys = Object.keys(book);
        keys.sort(
            function (a, b) {
                a = a.toUpperCase();
                b = b.toUpperCase();
                if (a > b) {
                    return 1;
                } else if (a < b) {
                    return -1;
                } else {
                    return 0;
                }
            }
        );
        for (let i = 0; i< keys.length; i++) {
            this.bookParsedContent = this.bookParsedContent + keys[i] + ': ' + book[keys[i]] + ',\n';
        }

        /*:
        {
            "paragraphs": [
              {
                "choices": [
                  {
                    "description": "Bifurquer vers l'ouest",
                    "paragraphNr": 71
                  },
                ],
                "description": "Caverne sombre",
                "paragraphNr": 1
              },
          */
    }

    getParagraphAnchors(bookDocument) {
        let nodes = [];
        let anchors = bookDocument.getElementsByTagName('a');
        for (let i = 0; i < anchors.length; i++) {
            let name = anchors[i].name;
            if (this.isParagraphAnchor(anchors[i])) {
                nodes.push(anchors[i]);
            }
        }
        return nodes;
    }

    getParagraphData(paragraphAnchor) {
        let parentElement = paragraphAnchor.parentElement;
        let next = parentElement.nextElementSibling;
        let siblings = [];
        while (!!next && next.tagName !== 'H3') {
            siblings.push(next);
            next = next.nextElementSibling;
        }
        let descriptionValue = '';
        let choicesValue = [];
        let illustrationValue;
        for (let i = 0; i < siblings.length; i++) {
            let sibling = siblings[i];
            if ((sibling.tagName === 'P' && (!sibling.className || sibling.className === 'combat')) ||
                    (sibling.tagName === 'SPAN' && sibling.className === 'signpost') ||
                    sibling.tagName === 'BLOCKQUOTE' ||
                    (sibling.tagName === 'A' && sibling.href === '#action')) {
                descriptionValue = descriptionValue + sibling.textContent + '\n';
            } else if (sibling.tagName === 'P' && sibling.className === 'choice') {
                choicesValue.push(sibling.textContent);
            } else if (sibling.tagName === 'DIV' && sibling.className === 'illustration') {
                if (!illustrationValue) {
                    illustrationValue = sibling.textContent;
                } else {
                    throw 'illustration already exist for paragraph: ' + paragraphAnchor.name;
                }
            } else {
                debugger;
                throw 'tag unknown: ' + sibling.tagName + ' for paragraph: ' + paragraphAnchor.name;
            }
        }
        let paragraph = {
            paragraphNr: paragraphAnchor.textContent,
            description: descriptionValue,
            choices: choicesValue,
            illustration: illustrationValue
        };
        return paragraph;
    }

    isParagraphAnchor(element) {
        let name = element.name;
        return !!name && name.indexOf('sect') === 0;
    }

    getTitle(bookDocument) {
        let titleElement = this.getFirstElementByTag(bookDocument, 'title');
        if (!!titleElement) {
            return titleElement.text;
        } else {
            return '';
        }
    }

    getFirstElementByTag(bookDocument, tagName) {
        let elements = bookDocument.getElementsByTagName(tagName);
        if (!!elements && elements.length > 0) {
            return elements[0];
        } else {
            return '';
        }
    }
}

export default ImportProjectAeonController;