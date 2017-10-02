class AdministrationController {
    /*@ngInject*/
    constructor(persistenceService, adventurePersistenceService, constants, popupService, $window) {
        this.persistenceService = persistenceService;
        this.adventurePersistenceService = adventurePersistenceService;
        this.constants = constants;
        this.popupService = popupService;
        this.initData();
        this.$window = $window;

        this.popupConfirmImportApplicationDataConfig = {
            id : 'popupConfirmImportApplicationData',
            text : "All existing application's data will be erased during the import. Are you sure to import the application data?",
            choices : [constants.choices.yes, constants.choices.no]
        };
        
        this.popupConfirmDeleteApplicationDataConfig = {
            id : 'popupConfirmDeleteApplicationData',
            text : 'Are you sure to clear the application data?',
            choices : [constants.choices.yes, constants.choices.no]
        };
    }

    initData() {
        this.appVersion = this.constants.version;
        this.applicationData = this.persistenceService.export();
        this.computeLocalStorageCapacities();
    }

    computeLocalStorageCapacities() {
        this.usedLocalStorage = this.persistenceService.getUsedCapacity();
        this.remainingCapacity = this.persistenceService.getRemainingCapacity();
        this.usedLocalStorageInPercent = this.persistenceService.getUsedCapacityInPercent();
    }

    showPopupConfirmImportData() {
        let self = this;
        this.popupService.show(
            this.popupConfirmImportApplicationDataConfig.id,
            function(popupDomElementId, choice) {
                if (choice === self.constants.choices.yes) {
                    self.persistenceService.import(self.importData);
                    self.$window.location.reload();
                }
            }
        );
    }


    showPopupConfirmDeleteApplicationData() {
        let self = this;
        this.popupService.show(
            this.popupConfirmDeleteApplicationDataConfig.id,
            function(popupDomElementId, choice) {
                if (choice === self.constants.choices.yes) {
                    self.persistenceService.cleanAllData();
                    self.$window.location.reload();
                }
            }
        );
    }
}

export default AdministrationController;