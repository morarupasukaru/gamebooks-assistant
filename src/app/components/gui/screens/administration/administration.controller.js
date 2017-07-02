class AdministrationController {
    /*@ngInject*/
    constructor(persistenceService, adventurePersistenceService, constants, $window, $mdDialog, $translate) {
        this.persistenceService = persistenceService;
        this.adventurePersistenceService = adventurePersistenceService;
        this.constants = constants;
        this.initData();
        this.$window = $window;
        this.$mdDialog = $mdDialog;
        this.$translate = $translate;
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

    showPopupConfirmImportData(event, adventure) {
        // TODO textarea in dialog
        let confirm = this.$mdDialog.prompt()
          .title(this.$translate.instant("All existing application's data will be erased during the import. Are you sure to import the application data?"))
          .placeholder(this.$translate.instant("Paste the application's data copied from another browser"))
          .ariaLabel(this.$translate.instant("Paste the application's data copied from another browser"))
          .targetEvent(event)
          //.required(true) TODO check why required is not available
          .ok(this.$translate.instant('Ok'))
          .cancel(this.$translate.instant('Cancel'));

        let self = this;
        this.$mdDialog.show(confirm).then(function(result) {
            self.persistenceService.import(result);
            self.$window.location.reload();
        }, function() {
        });
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