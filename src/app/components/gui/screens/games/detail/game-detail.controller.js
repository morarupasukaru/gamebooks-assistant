class GameDetailController {
    /*@ngInject*/
    constructor($location, constants, $stateParams, gamePersistenceService, adventurePersistenceService, $translate, messagesService, $filter, $window) {
        this.$location = $location;
        this.constants = constants;
        this.$stateParams = $stateParams;
        this.gamePersistenceService = gamePersistenceService;
        this.adventurePersistenceService = adventurePersistenceService;
        this.$translate = $translate;
        this.messagesService = messagesService;
        this.$filter = $filter;
        this.$window = $window;
        this.stats = [];
        this.initData();
    }

    initData() {
        this.game = this.gamePersistenceService.getGame(decodeURIComponent(this.$stateParams.gameId));
        if (!!this.game.stats) {
            this.stats = this.stats.concat(this.game.stats);
        }
        this.adventureId = this.$stateParams.adventureId;
        this.paragraph = this.adventurePersistenceService.getOrCreateParagraph(this.adventureId, this.$stateParams.paragraphNr);
        this.adventure = this.adventurePersistenceService.getAdventure(this.adventureId);
        this.visibleSections = this.adventurePersistenceService.getOrCreateVisibleSections(this.adventureId, this.paragraph.tag);
        this.checkAvailableAdventure();
    }

    checkAvailableAdventure() {
        if (!this.adventure) {
            this.messagesService.errorMessage('The adventure is not available', false)
        }
    }

    goToGameRulesParagraph() {
        this.gamePersistenceService.setCurrentParagraphNrOfGame(this.game.id, this.paragraph.paragraphNr, this.adventure.gameRulesParagraphId);
        let nextUrl = this.gamePersistenceService.getUrlOfGame(this.game.id);
        this.$location.url(nextUrl);
    }

    isMapAvailable() {
        return !!this.adventure.toggles.map && !!this.visibleSections['Map'].checked;
    }

    isDicesAvailable() {
        return !!this.adventure.toggles.dices && !!this.visibleSections['Dices'].checked;
    }

    isCharactersAvailable() {
        return !!this.adventure.toggles.characters && !!this.visibleSections['Characters'].checked;
    }

    isEntriesAvailable(type) {
        return !this.visibleSections[type] || !!this.visibleSections[type].checked;
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
        this.adventurePersistenceService.updateVisibleSectionsAndParagrahTag(this.adventure.id, this.paragraph, this.visibleSections, this.originalTag);
        this.originalTag = null;
        this.tagEditable = false;
    }

    abortTagChanges() {
        this.paragraph.tag = this.originalTag;
        this.originalTag = null;
        this.tagEditable = false;
    }

    onSubListSave(list, entries) {
        this.game.lists[list] = entries;
        this.gamePersistenceService.updateGame(this.game);
    }

    saveGame() {
        let playerName = this.getPlayerName(this.game.characters)
        let adventureName = this.adventure.name;
        let playerNameWithTime = playerName + ' (' + this.now() + ')';

        let exportData = this.gamePersistenceService.exportGame(this.game.id);
        this.setPlayerName(exportData.characters, playerNameWithTime);
        delete exportData.id;
        let exportDataStr = JSON.stringify(exportData);
        this.gamePersistenceService.importGame(exportDataStr);
        this.messagesService.successMessage('Game successfully saved', false)
        this.$window.scrollTo(0, 0);
    }

    now() {
        let now = new Date();
        return this.$filter('date')(now, 'dd.MM.yyyy HH:mm');
    }

    getPlayerName(characters) {
        if (!!characters) {
            for (let i = 0; i < characters.length; i++) {
                if (!characters[i].deletable) {
                    return characters[i].name;
                }
            }
        }
        return null;
    }

    setPlayerName(characters, newPlayerName) {
        if (!!characters) {
            for (let i = 0; i < characters.length; i++) {
                if (!characters[i].deletable) {
                    characters[i].name = newPlayerName;
                    return ;
                }
            }
        }
    }
}

export default GameDetailController;