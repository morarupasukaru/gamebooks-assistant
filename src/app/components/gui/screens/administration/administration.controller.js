class AdministrationController {
    /*@ngInject*/
    constructor(persistenceService, adventurePersistenceService, constants, $window, $mdDialog, $translate, $q, $timeout) {
        this.persistenceService = persistenceService;
        this.adventurePersistenceService = adventurePersistenceService;
        this.constants = constants;
        this.$window = $window;
        this.$mdDialog = $mdDialog;
        this.$translate = $translate;
        this.$q = $q;
        this.$timeout = $timeout;
        this.initData();
    }

    initData() {
        this.appVersion = this.constants.version;
        this.loading = true;
        this.applicationData = this.persistenceService.export();
        this.applicationDataRows = this.applicationData.length / 100;
        if (this.applicationDataRows > 10) {
            this.applicationDataRows = 10;
        }
        let promise = this.asyncLoading();
        let self = this;
        promise.then(
            function() {
                self.loading = false;
            }, function(reason) {
                self.loading = false;
            }
        );
    }

    asyncLoading() {
        let self = this;
        let deferred = this.$q.defer();
        this.$timeout(function() {
            self.computeLocalStorageCapacities();
            deferred.resolve();
        }, 1000);
        return deferred.promise;
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