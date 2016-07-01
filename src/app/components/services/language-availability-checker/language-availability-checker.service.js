let self;

class LanguageAvailabilityCheckerService {

    /*@ngInject*/
    constructor(permanentPersistenceService, $location, constants, $translate) {
        self = this;
        self.persistenceService = permanentPersistenceService;
        self.$location = $location;
        self.constants = constants;
        self.$translate = $translate;
    }

    selectLanguageIfMissing() {
        let selectedLanguage = self.persistenceService.get(self.constants.preferences.language);
        let currentUrl = self.$location.url();
        if (!!selectedLanguage) {
            self.$translate.use(selectedLanguage);
        } else {
            if (!!currentUrl && !currentUrl.startsWith('/choose-language')) {
                self.$location.url('/choose-language?next=' + encodeURIComponent(currentUrl));
            }
        }
    }
}

export default LanguageAvailabilityCheckerService;