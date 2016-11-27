class DescriptionController {
    /*@ngInject*/
    constructor(gamePersistenceService, adventurePersistenceService, $location) {
        this.gamePersistenceService = gamePersistenceService;
        this.adventurePersistenceService = adventurePersistenceService;
        this.$location = $location;
        this.initData();
    }

    initData() {
        let game = this.gamePersistenceService.getGame(this.gameId);
        this.adventureId = game.adventureId;
        this.descriptionEditable = false;
        this.alreadyChoosen = this.gamePersistenceService.getChoosenChoices(this.gameId, this.paragraph.paragraphNr);
        this.computeDescriptionWithChoice(this.paragraph.description);
    }

    computeDescriptionWithChoice(description) {
        let splits = description.split('§');
        this.descriptionWithChoices = [];
        for (let i = 0; i < splits.length; i++) {
            let split = splits[i];
            this.descriptionWithChoices.push({ choice: this.isNumber(split), text: split });
        }
    }

    isNumber(text) {
        let result = new Number(text).toString();
        return result !== "NaN";
    }

    editDescription() {
        this.descriptionEditable = true;
        this.originalDescription = this.paragraph.description;
    }

    isDescriptionEditable() {
        return this.descriptionEditable;
    }

    saveDescriptionChanges() {
        this.originalDescription = null;
        this.descriptionEditable = false;
        this.adventurePersistenceService.updateParagraph(this.adventureId, this.paragraph);
        this.computeDescriptionWithChoice(this.paragraph.description);
    }

    abortDescriptionChanges() {
        this.paragraph.description = this.originalDescription;
        this.originalDescription = null;
        this.descriptionEditable = false;
    }

    goTo(paragraphNr) {
        this.gamePersistenceService.setCurrentParagraphNrOfGame(this.gameId, this.paragraph.paragraphNr, paragraphNr);
        let nextUrl = this.gamePersistenceService.getUrlOfGame(this.gameId);
        this.$location.url(nextUrl);
    }

    isAlreadyChoosen(choice) {
        return this.alreadyChoosen.indexOf(choice.paragraphNr) !== -1;
    }

    over(data) {
        this.mouseOver(data, true);
    }

    leave(data) {
        this.mouseOver(data, false);
    }

    mouseOver(data, hasMouseOver) {
        if (!data.mouseOver && hasMouseOver) {
            data.mouseOver = hasMouseOver;
            this.highlight(data, true);
        } else {
            delete data.mouseOver;
            this.highlight(data, false);
        }
    }

    highlight(data, highlighted) {
        if (!!highlighted) {
            data.highlighted = true;
        } else {
            delete data.highlighted;
        }
    }
}

export default DescriptionController;