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
        let textsDelimitedWithEol = description.split('\n');
        this.paragraphs = [];
        for (let i = 0; i < textsDelimitedWithEol.length; i++) {
            let textDelimitedWithEol = textsDelimitedWithEol[i];
            if (!!textDelimitedWithEol && textDelimitedWithEol.trim().length > 0) {
                let splits = textDelimitedWithEol.split('§');
                let descriptionWithChoices = [];
                for (let i = 0; i < splits.length; i++) {
                    let split = splits[i];
                    if (!!split && split.trim().length > 0) {
                        descriptionWithChoices.push({ choice: this.isNumber(split), text: split });
                    }
                }
                this.paragraphs.push(descriptionWithChoices);
            }
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

    isAlreadyChoosen(paragraphNr) {
        return this.alreadyChoosen.indexOf(paragraphNr) !== -1;
    }
}

export default DescriptionController;