let ctrl;
class AdministrationController {
    /*@ngInject*/
    constructor(preScreenLoadingInterceptorsCallerService, persistenceService, bookPersistenceService, constants, popupService, $window) {
        preScreenLoadingInterceptorsCallerService.intercept();
        ctrl = this;
        this.persistenceService = persistenceService;
        this.bookPersistenceService = bookPersistenceService;
        this.constants = constants;
        this.popupService = popupService;
        this.initData();
        this.$window = $window;

        this.popupConfirmImportApplicationDataConfig = {
            id : 'popupConfirmImportApplicationData',
            text : "All existing application's data will be erased during the import. Are you sure to import the application data?",
            choices : [constants.choices.yes, constants.choices.no],
            withCloseButton : false,
            closeOnClickOutsideModal : false
        };
        
        this.popupConfirmDeleteApplicationDataConfig = {
            id : 'popupConfirmDeleteApplicationData',
            text : 'Are you sure to clear the application data?',
            choices : [constants.choices.yes, constants.choices.no],
            withCloseButton : false,
            closeOnClickOutsideModal : false
        };
    }

    initData() {
        this.applicationData = JSON.stringify(this.persistenceService.export());
        this.exportBooksData = this.bookPersistenceService.export();
        this.computeLocalStorageCapacities();
    }

    computeLocalStorageCapacities() {
        this.usedLocalStorage = this.persistenceService.getUsedCapacity();
        this.remainingCapacity = this.persistenceService.getRemainingCapacity();
        this.usedLocalStorageInPercent = this.persistenceService.getUsedCapacityInPercent();
    }

    showPopupConfirmImportData() {
        this.popupService.show(this.popupConfirmImportApplicationDataConfig.id, this.callbackPopupConfirmImportData);
    }

    callbackPopupConfirmImportData(popupDomElementId, choice) {
        if (choice === ctrl.constants.choices.yes) {
            ctrl.persistenceService.import(ctrl.importData);
            ctrl.$window.location.reload();
        }
    }

    showPopupConfirmDeleteApplicationData() {
        this.popupService.show(this.popupConfirmDeleteApplicationDataConfig.id, this.callbackPopupConfirmDeleteApplicationData);
    }

    callbackPopupConfirmDeleteApplicationData(popupDomElementId, choice) {
        if (choice === ctrl.constants.choices.yes) {
            ctrl.persistenceService.cleanAllData();
            ctrl.$window.location.reload();
        }
    }
}

export default AdministrationController;