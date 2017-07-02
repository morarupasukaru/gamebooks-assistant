class AdministrationController {
    /*@ngInject*/
    constructor(persistenceService, adventurePersistenceService, constants, popupService, $window, $mdDialog, $translate) {
        this.persistenceService = persistenceService;
        this.adventurePersistenceService = adventurePersistenceService;
        this.constants = constants;
        this.popupService = popupService;
        this.initData();
        this.$window = $window;
        this.$mdDialog = $mdDialog;
        this.$translate = $translate;

        this.popupConfirmImportApplicationDataConfig = {
            id : 'popupConfirmImportApplicationData',
            text : "All existing application's data will be erased during the import. Are you sure to import the application data?",
            choices : [constants.choices.yes, constants.choices.no]
        };
    }

    initData() {
        this.appVersion = this.constants.version;
        this.applicationData = this.persistenceService.export();
        this.applicationDataRows = this.applicationData.length / 100;
        if (this.applicationDataRows > 10) {
            this.applicationDataRows = 10;
        }
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
        let confirm = this.$mdDialog.confirm()
              .title(this.$translate.instant('Are you sure to clear the application data?'))
              .targetEvent(event)
              .ok(this.$translate.instant('Yes'))
              .cancel(this.$translate.instant('No'));

        let self = this;
        this.$mdDialog.show(confirm).then(function() {
            self.persistenceService.cleanAllData();
            self.$window.location.reload();
        }, function() {
            // cancel
        });
    }
}

export default AdministrationController;