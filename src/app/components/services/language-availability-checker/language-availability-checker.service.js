let self;
class LanguageAvailabilityCheckerService {

    /*@ngInject*/
    constructor(gamePersistenceService, $location, constants, $translate) {
        self = this;
        self.gamePersistenceService = gamePersistenceService;
        self.$location = $location;
        self.constants = constants;
        self.$translate = $translate;
    }

    selectLanguageIfMissing() {
        let selectedLanguage = self.gamePersistenceService.getSelectedLanguage();
        let currentUrl = self.$location.url();
        if (!!selectedLanguage) {
            self.$translate.use(selectedLanguage);
        } else {
            if (!!currentUrl && !currentUrl.startsWith('/choose-language')) {
                self.$location.url(self.constants.url.chooseLanguage);
            }
        }
    }
}

export default LanguageAvailabilityCheckerService;