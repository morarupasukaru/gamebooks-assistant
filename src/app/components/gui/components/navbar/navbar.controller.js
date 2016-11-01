class NavbarController {
    /*@ngInject*/
    constructor(preScreenLoadingInterceptorsCallerService, $location, languagePickerService) {
        this.languagePickerService = languagePickerService;
        preScreenLoadingInterceptorsCallerService.intercept();
        let params = $location.search();
        if (!!params.admin) {
            this.admin = true;
        }
        this.navCollapsed = true;
        this.initData();
    }

    initData() {
        this.supportedLanguages = this.languagePickerService.getSupportedLanguages();
        this.changeLanguage(this.languagePickerService.getSelectedLanguage());
    }

    changeLanguage(selectedLanguage) {
        this.language = selectedLanguage;
        this.languagePickerService.changeLanguage(selectedLanguage);
    }
}

export default NavbarController;