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
}

export default DescriptionController;