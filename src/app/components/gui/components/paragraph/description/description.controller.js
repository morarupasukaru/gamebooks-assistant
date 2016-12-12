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
        let lines = this.getLines(description);
        this.paragraphs = [];
        for (let i = 0; i < lines.length; i++) {
            let line = lines[i];
            let descriptionWithChoices = [];
            while (this.hasChoice(line)) {
                let indexOfFirstDelimiter = line.indexOf('§');
                let indexOfSecondDelimiter = line.indexOf('§', indexOfFirstDelimiter + 1);
                let textBeforeChoice = line.slice(0, indexOfFirstDelimiter);
                if (!!textBeforeChoice && textBeforeChoice.trim().length > 0) {
                    descriptionWithChoices.push({ choice: false, text: textBeforeChoice });
                }

                let textOfChoice = line.slice(indexOfFirstDelimiter + 1, indexOfSecondDelimiter);
                if (!!textOfChoice && textOfChoice.trim().length > 0) {
                    descriptionWithChoices.push({ choice: true, text: textOfChoice });
                }
                line = line.substr(indexOfSecondDelimiter + 1);
            }
            if (!!line && line.trim().length > 0) {
                descriptionWithChoices.push({ choice: false, text: line });
            }
            this.paragraphs.push(descriptionWithChoices);
        }
    }

    getLines(description) {
        let textsDelimitedWithEol = description.split('\n');
        let lines = [];
        for (let i = 0; i < textsDelimitedWithEol.length; i++) {
            let textDelimitedWithEol = textsDelimitedWithEol[i];
            if (!!textDelimitedWithEol && textDelimitedWithEol.trim().length > 0) {
                lines.push(textDelimitedWithEol);
            }
        }
        return lines;
    }

    hasChoice(text) {
        let indexOfFirstDelimiter = text.indexOf('§');
        let indexOfSecondDelimiter = text.indexOf('§', indexOfFirstDelimiter + 1);
        return indexOfFirstDelimiter !== -1 && indexOfSecondDelimiter !== -1;
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