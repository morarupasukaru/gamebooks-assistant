class MessagesService {
    /*@ngInject*/
    constructor($mdToast, $translate) {
        this.$mdToast = $mdToast;
        this.$translate = $translate;
    }

    successMessage(msg, keepAfterLocationChange) {
        this.$mdToast.show(
              this.$mdToast.simple()
                .textContent(msg)
                .position('top')
                .theme("success-toast")
                .hideDelay(3000)
            );
    }

    errorMessage(msg, keepAfterLocationChange) {
        let toast =
              this.$mdToast.simple()
                .textContent(msg)
                .position('top')
                .action(this.$translate.instant('Close'))
                .theme("error-toast")
                .hideDelay(0);
        this.$mdToast.show(toast);
    }

    infoMessage(msg, keepAfterLocationChange) {
        this.$mdToast.show(
              this.$mdToast.simple()
                .textContent(msg)
                .position('top')
                .hideDelay(3000)
            );
    }
}

export default MessagesService;