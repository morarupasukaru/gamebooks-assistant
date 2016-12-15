class ParagraphController {
    /*@ngInject*/
    constructor(gamePersistenceService, adventurePersistenceService) {
        this.gamePersistenceService = gamePersistenceService;
        this.adventurePersistenceService = adventurePersistenceService;

        this.initData();
    }

    initData() {
        let game = this.gamePersistenceService.getGame(this.gameId);
        this.adventureId = game.adventureId;
        this.playerName = game.playerName;
        this.descriptionEditable = false;
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

    editTag() {
        this.tagEditable = true;
        this.originalTag = this.paragraph.tag;
    }

    isTagEditable() {
        return this.tagEditable;
    }

    saveTagChanges() {
        this.originalTag = null;
        this.tagEditable = false;
        this.adventurePersistenceService.updateParagraph(this.adventureId, this.paragraph);
    }

    abortTagChanges() {
        this.paragraph.tag = this.originalTag;
        this.originalTag = null;
        this.tagEditable = false;
    }
}

export default ParagraphController;