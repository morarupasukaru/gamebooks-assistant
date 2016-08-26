class LanguagePickerService {

    /*@ngInject*/
    constructor(gamePersistenceService, $translate, constants) {
        this.gamePersistenceService = gamePersistenceService;
        this.$translate = $translate;
        this.constants = constants;
        this.supportedLanguages = this.initSupportedLanguages();
    }

    initSupportedLanguages() {
        let supportedLanguages = [];
        for (let i = 0; i < this.constants.supportedLanguages.length; i++) {
            supportedLanguages.push({
                code : this.constants.supportedLanguages[i]
            });
        }
        return supportedLanguages;
    }

    getSupportedLanguages() {
        return this.supportedLanguages;
    }

    getSelectedLanguage() {
        let selectedLanguage = this.gamePersistenceService.getSelectedLanguage();
        if (!!selectedLanguage) {
            return selectedLanguage;
        } else if (!!navigator.language) {
            let i;
            for (i = 0; i < this.constants.supportedLanguages.length; i++) {
                if (this.constants.supportedLanguages[i] === navigator.language) {
                    return this.constants.supportedLanguages[i];
                }
            }

            for (i = 0; i < this.constants.supportedLanguages.length; i++) {
                if (navigator.language.startsWith(this.constants.supportedLanguages[i])) {
                    return this.constants.supportedLanguages[i];
                }
            }
        }
        return this.constants.supportedLanguages[0];
    }

    changeLanguage(selectedLanguage) {
        this.$translate.use(selectedLanguage);
        this.gamePersistenceService.setSelectedLanguage(selectedLanguage);
        for (let i = 0; i < this.supportedLanguages.length; i++) {
            this.supportedLanguages[i].selected = (this.supportedLanguages[i].code === selectedLanguage);
        }
    }
}

export default LanguagePickerService;