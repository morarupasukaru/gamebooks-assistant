// TODO translate all screen in french
let self;
class LanguagePickerController {
    /*@ngInject*/
    constructor($translate, constants, permanentPersistenceService) {
        self = this;
        self.$translate = $translate;
        self.persistenceService = permanentPersistenceService;
        self.constants = constants;
        self.initData(constants.supportedLanguages);
    }

    initData(languages) {
        self.supportedLanguages = [];
        let i;
        let selectedLanguage = self.getSelectedLanguage(languages);
        for (i = 0; i < languages.length; i++) {
            self.supportedLanguages.push({
                code : languages[i]
            });
        }
        self.changeLanguage(selectedLanguage);
    }

    getSelectedLanguage(languages) {
        let selectedLanguage = self.persistenceService.get(self.constants.preferences.language);
        if (!!selectedLanguage) {
            return selectedLanguage;
        } else if (!!navigator.language) {
            let i;
            for (i = 0; i < languages.length; i++) {
                if (languages[i] === navigator.language) {
                    return languages[i];
                }
            }

            for (i = 0; i < languages.length; i++) {
                if (navigator.language.startsWith(languages[i])) {
                    return languages[i];
                }
            }
        }
        return language[0];
    }

    changeLanguage(selectedLanguage) {
        self.$translate.use(selectedLanguage);
        self.persistenceService.save(self.constants.preferences.language, selectedLanguage);

        let i;
        for (i = 0; i < self.supportedLanguages.length; i++) {
            self.supportedLanguages[i].selected = (self.supportedLanguages[i].code === selectedLanguage);
        }
    }
}

export default LanguagePickerController;