class GameDetailController {
    /*@ngInject*/
    constructor($location, constants, $stateParams, gamePersistenceService, adventurePersistenceService, $translate, messagesService) {
        this.$location = $location;
        this.constants = constants;
        this.$stateParams = $stateParams;
        this.gamePersistenceService = gamePersistenceService;
        this.adventurePersistenceService = adventurePersistenceService;
        this.$translate = $translate;
        this.messagesService = messagesService;
        this.stats = [];
        this.initData();
    }

    initData() {
        this.game = this.gamePersistenceService.getGame(decodeURIComponent(this.$stateParams.gameId));
        this.playerName = this.game.playerName;
        if (!!this.game.stats) {
            this.stats = this.stats.concat(this.game.stats);
        }
        this.adventureId = this.$stateParams.adventureId;
        this.paragraph = this.adventurePersistenceService.getOrCreateParagraph(this.adventureId, this.$stateParams.paragraphNr);
        this.adventure = this.adventurePersistenceService.getAdventure(this.adventureId);
        this.initSections();
        this.checkAvailableAdventure();
    }

    checkAvailableAdventure() {
        if (!this.adventure) {
            this.messagesService.errorMessage('The adventure is not available', false)
        }
    }

    initSections() {
        this.sections = {};
        if (!!this.adventure.toggles.map) {
            this.sections['Map'] = { value: this.$translate.instant('Map'), checked: true };
        }
        if (!!this.adventure.toggles.stats) {
            this.sections['Stats'] = { value: this.$translate.instant('Stats'), checked: true };
        }
        if (!!this.adventure.toggles.characters) {
            this.sections['Characters'] = { value: this.$translate.instant('Characters'), checked: true };
        }
        if (!!this.adventure.toggles.dices) {
            this.sections['Dices'] = { value: this.$translate.instant('Dices'), checked: true };
        }
        for (let i = 0; i < this.adventure.lists.keys.length; i++) {
            this.sections[this.adventure.lists.keys[i]] = { value: this.adventure.lists.keys[i], checked: true };
        }
    }

    goToGameRulesParagraph() {
        this.gamePersistenceService.setCurrentParagraphNrOfGame(this.game.id, this.paragraph.paragraphNr, this.adventure.gameRulesParagraphId);
        let nextUrl = this.gamePersistenceService.getUrlOfGame(this.game.id);
        this.$location.url(nextUrl);
    }

    isMapAvailable() {
        return !!this.adventure.toggles.map && !!this.sections['Map'].checked;
    }

    isDicesAvailable() {
        return !!this.adventure.toggles.dices && !!this.sections['Dices'].checked;
    }

    isStatsAvailable() {
        return !!this.adventure.toggles.stats && !!this.sections['Stats'].checked;
    }

    isCharactersAvailable() {
        return !!this.adventure.toggles.characters && !!this.sections['Characters'].checked;
    }

    isEntriesAvailable(type) {
        return !!this.sections[type].checked;
    }

    isGameRulesAvailable() {
        return !!this.adventure.gameRulesParagraphId;
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

export default GameDetailController;