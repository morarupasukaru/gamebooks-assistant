class GamesListController {
    /*@ngInject*/
    constructor($location, preScreenLoadingInterceptorsCallerService, constants, gamePersistenceService, adventurePersistenceService, messagesService, $translate, popupService) {
        this.constants = constants;
        preScreenLoadingInterceptorsCallerService.intercept();
        this.$location = $location;
        this.gamePersistenceService = gamePersistenceService;
        this.adventurePersistenceService = adventurePersistenceService;
        this.messagesService = messagesService;
        this.$translate = $translate;
        this.popupService = popupService;

        this.popupDeleteGameConfig = {
            id : 'popupDeleteGame',
            text : 'Are you sure to remove the selected game?',
            choices : [constants.choices.yes, constants.choices.no],
            withCloseButton : false,
            closeOnClickOutsideModal : false
        };

        this.initData();
    }

    initData() {
        let gamePersistenceKeys = this.gamePersistenceService.getGamePersistenceKeys();
        this.rows = [];
        for (let i = 0; i < gamePersistenceKeys.length; i++) {
            let game = this.gamePersistenceService.getGame(gamePersistenceKeys[i]);
            this.rows.push(game);
        }

        this.completeAdventureName(this.rows);
    }

    completeAdventureName(games) {
        for (let i = 0; i < games.length; i++) {
            let adventure = this.adventurePersistenceService.getAdventure(games[i].adventureId);
            if (!!adventure) {
                games[i].adventureName = adventure.name;
            } else {
                this.messagesService.errorMessage(this.$translate.instant('Cannot find adventure') + " '"  + games[i].adventureId + "'", false);
                games[i].adventureName = games[i].adventureId;
            }
        }
    }

    select(row) {
        for (let i = 0; i < this.rows.length; i++) {
            this.rows[i].selected = false;
        }
        row.selected = true;
    }

    startNewGame() {
        let adventureKeys = this.adventurePersistenceService.getAdventurePersistenceKeys();
        if (!adventureKeys || adventureKeys.length === 0) {
            this.messagesService.errorMessage('No adventure available', false);
            return ;
        }
        this.$location.url(this.constants.url.selectAdventureForNewGame);
    }

    continueGame() {
        let game = this.gamePersistenceService.getGame(this.getSelectedRow().id);
        let adventure = this.adventurePersistenceService.getAdventure(game.adventureId);
        if (!adventure) {
            this.messagesService.errorMessage('The adventure is not available', false)
        } else {
            let nextUrl = this.gamePersistenceService.getUrlOfGame(this.getSelectedRow().id);
            this.$location.url(nextUrl);
        }
    }

    displayRemoveGamePopup() {
        this.popupService.show(this.popupDeleteGameConfig.id, this.callbackRemovePopup);
    }

    callbackRemovePopup(popupDomElementId, choice) {
        if (choice === this.constants.choices.yes) {
            this.deleteGame();
        }
    }

    deleteGame() {
        this.gamePersistenceService.deleteGame(this.getSelectedRow().id, true, true);
        this.initData();
    }

    hasSelectedRow() {
        return !!this.getSelectedRow();
    }


    getSelectedRow() {
        for (let i = 0; i < this.rows.length; i++) {
            if (!!this.rows[i].selected) {
                return this.rows[i];
            }
        }
        return null;
    }
}

export default GamesListController;