class LibraryDetailController {
    /*@ngInject*/
    constructor(preScreenLoadingInterceptorsCallerService, libraryPersistenceService, $stateParams, $location, constants, messagesService, $timeout, $window, $translate, formHelperService, $log) {
        preScreenLoadingInterceptorsCallerService.intercept();
        this.libraryPersistenceService = libraryPersistenceService;
        this.$stateParams = $stateParams;
        this.$location = $location;
        this.constants = constants;
        this.messagesService = messagesService;
        this.$timeout = $timeout;
        this.$window = $window;
        this.formHelperService = formHelperService;
        this.$translate = $translate;
        this.$log = $log;
        this.initData();
        this.setInitialFocus();
    }

    initData() {
        let libraryId = encodeURIComponent(this.$stateParams.libraryId);
        if (!!libraryId) {
            if ("create" === libraryId) {
                this.library = {};
                this.mode = "create";
            } else {
                this.library = this.libraryPersistenceService.getLibrary(libraryId);
                this.mode = "edit";
            }
        }
    }

    setInitialFocus() {
        let that = this;
        this.$timeout(function() {
            let element = that.$window.document.getElementById("siteName");
            if(!!element) {
                element.focus();
            }
        });
    }

    save(form) {
        this.formHelperService.setErrorFieldsAsDirty(form, true);
        if (form.$invalid) {
            return ;
        }

        try {
            this.libraryPersistenceService.updateLibrary(this.library);
            this.$location.url(this.constants.url.libraries);
        } catch (error) {
            this.$log.warn(error);
        }
    }
}

export default LibraryDetailController;