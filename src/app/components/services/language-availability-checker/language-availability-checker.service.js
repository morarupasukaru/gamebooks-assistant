let self;
class LanguageAvailabilityCheckerService {

    /*@ngInject*/
    constructor(persistenceService, $location, constants, $translate) {
        self = this;
        self.persistenceService = persistenceService;
        self.$location = $location;
        self.constants = constants;
        self.$translate = $translate;
    }

    selectLanguageIfMissing() {
        let selectedLanguage = self.persistenceService.getSelectedLanguage();
        let currentUrl = self.$location.url();
        if (!!selectedLanguage) {
            self.$translate.use(selectedLanguage);
        } else {
            if (!!currentUrl && !currentUrl.startsWith('/choose-language')) {
                self.$location.url(self.constants.url.chooseLanguage + '?next=' + encodeURIComponent(currentUrl));
            }
        }
    }
}

export default LanguageAvailabilityCheckerService;