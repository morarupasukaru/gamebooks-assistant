class ParagraphController {
    /*@ngInject*/
    constructor(preScreenLoadingInterceptorsCallerService, popupService, constants, gamePersistenceService, adventurePersistenceService, $location) {
        preScreenLoadingInterceptorsCallerService.intercept();
        this.popupService = popupService;
        this.constants = constants;
        this.gamePersistenceService = gamePersistenceService;
        this.adventurePersistenceService = adventurePersistenceService;
        this.$location = $location;

        this.popupDeleteChoiceConfig = {
            id : 'popupDeleteChoice',
            text : 'Are you sure to remove the choice?',
            choices : [constants.choices.yes, constants.choices.no],
            withCloseButton : false,
            closeOnClickOutsideModal : false
        };

        this.initData();
    }

    initData() {
        let game = this.gamePersistenceService.getGame(this.gameId);
        this.adventureId = game.adventureId;
        this.playerName = game.playerName;
        this.descriptionEditable = false;
        this.alreadyChoosen = this.gamePersistenceService.getChoosenChoices(this.gameId, this.paragraph.paragraphNr);
    }

    addRow() {
        let row = { paragraphNr : this.inputParagraphNr, description : this.inputDescription };
        this.paragraph.choices.push(row);
        this.inputParagraphNr = '';
        this.inputDescription = '';
        this.addedRow = row;
    }

    displayRemovePopup(removedRow) {
        this.rowToBeRemoved = removedRow;
        let self = this;
        this.popupService.show(
            this.popupDeleteChoiceConfig.id,
            function(popupDomElementId, choice) {
                if (choice === self.constants.choices.yes) {
                    self.removeRow(self.rowToBeRemoved);
                }
                self.rowToBeRemoved = null;
            }
        );
    }


    removeRow(removedRow) {
        var index = this.paragraph.choices.indexOf(removedRow);
        this.paragraph.choices.splice(index, 1);
        this.clearEditedRow();
        this.saveParagraphChoices();
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

    editRow(row) {
        this.editedRow = row;
        this.originalRow = { paragraphNr : row.paragraphNr, description : row.description };
    }

    isRowEdited(row) {
        return row === this.editedRow || row === this.addedRow;
    }

    hasEditedRow() {
        return !!this.editedRow || !! this.addedRow;
    }

    saveRowChanges($invalid) {
        if ($invalid) {
            return ;
        }
        this.clearEditedRow();
        this.saveParagraphChoices();
    }

    saveParagraphChoices() {
        this.adventurePersistenceService.updateParagraph(this.adventureId, this.paragraph);
    }

    abortRowChanges() {
        if (!!this.addedRow) {
            this.removeRow(this.addedRow);
        }
        if (!!this.editedRow) {
            this.editedRow.paragraphNr = this.originalRow.paragraphNr;
            this.editedRow.description = this.originalRow.description;
        }
        this.clearEditedRow();
    }

    clearEditedRow() {
        this.addedRow = null;
        this.editedRow = null;
        this.originalRow = null;
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

export default ParagraphController;