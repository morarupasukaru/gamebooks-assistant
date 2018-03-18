class FootnoteController {

    /*@ngInject*/
    constructor(languagePickerService) {
        this.languagePickerService = languagePickerService;
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

export default FootnoteController;