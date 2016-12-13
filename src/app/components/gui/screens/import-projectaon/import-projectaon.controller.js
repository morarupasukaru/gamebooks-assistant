class ImportProjectAeonController {
    /*@ngInject*/
    constructor($http, messagesService, $translate, adventurePersistenceService, paragraphElementType) {
        this.$http = $http;
        this.messagesService = messagesService;
        this.$translate = $translate;
        this.adventurePersistenceService = adventurePersistenceService;
        this.projectaonUrl = 'book1-single.htm';
        this.paragraphElementType = paragraphElementType;
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
        let contentValue = [];
        let paragraphNr = paragraphAnchor.textContent;
        for (let i = 0; i < siblings.length; i++) {
            let elementValue = this.getParagraphElementValue(siblings[i], paragraphNr);
            if (!!elementValue) {
                contentValue.push(elementValue);
            }
        }
        let paragraph = {
            paragraphNr: paragraphNr,
            content: contentValue
        };
        return paragraph;
    }

    getParagraphElementValue(element, paragraphNr) {

        let elementType = this.getParagraphElementTyp(element, paragraphNr);
        if (this.paragraphElementType.text === elementType) {
            return {
                type : this.paragraphElementType.text,
                text : element.textContent
            };
        } else if (this.paragraphElementType.choice === elementType) {
            return {
                type : this.paragraphElementType.choice,
                text : element.textContent,
                paragraphNr : this.choiceParagraphNr(element)
            };
        } else if (this.paragraphElementType.illustration === elementType) {
            let imageElements = element.getElementsByTagName('IMG');
            if (imageElements.length > 1) {
                this.messagesService.errorMessage(this.$translate.instant("MoreThanOneIllustrationInLoneWolfBookParagraph", {paragraphNr: paragraphNr }), false);
            }
            return {
                type : this.paragraphElementType.illustration,
                imageSource : imageElements[0].src,
                imageAlternativeText : imageElements[0].alt,
                imageText : element.textContent
            };
        } else if (this.paragraphElementType.illustrationAsText === elementType) {
            return {
                type : this.paragraphElementType.illustrationAsText,
                imageText : element.textContent
            };
        }
    }

    getParagraphElementTyp(element, paragraphNr) {
        let tagName = element.tagName;
        let className = element.className;
        if ((tagName === 'P' && (!className || className === 'combat')) ||
                (tagName === 'SPAN' && className === 'signpost') ||
                tagName === 'BLOCKQUOTE' ||
                (tagName === 'A' && element.href === '#action')) {
            return this.paragraphElementType.text;
        } else if (tagName === 'P' && className === 'choice') {
            return this.paragraphElementType.choice;
        } else if (!!element.getElementsByTagName('IMG')) {
            return this.paragraphElementType.illustration;
        } else if (tagName === 'DIV' && className === 'illustration') {
            return this.paragraphElementType.illustrationAsText;
        } else {
            this.messagesService.errorMessage(this.$translate.instant("UnsupportedTagClassInLoneWolfBook", {tagName: tagName, className: className, paragraphNr: paragraphNr }), false);
            return null;
        }
    }

    choiceParagraphNr(element) {
        let result = null;
        if (!!element.childNodes) {
            for (let i = 0; i < element.childNodes.length; i++) {
                let childNode = element.childNodes[i];
                if (childNode.tagName === 'A' && !!childNode.href && childNode.href.indexOf('#sect') === 0) {
                    result = childNode.href.substring(5);
                    break;
                }
            }
        }
        return result;
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