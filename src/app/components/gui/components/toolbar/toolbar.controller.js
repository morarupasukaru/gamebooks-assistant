class ToolbarController {
    /*@ngInject*/
    constructor(languagePickerService, $location, $window) {
        this.languagePickerService = languagePickerService;
        this.$location = $location;
        this.$window = $window;
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

    displayHome() {
        this.$location.url('/');
    }

    displayCredits() {
        this.$location.url('/credits');
    }

    displayLicenses() {
        this.$window.open('https://opensource.org/licenses/MIT');
    }
}

export default ToolbarController;