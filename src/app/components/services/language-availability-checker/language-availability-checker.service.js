class LanguageAvailabilityCheckerService {

    /*@ngInject*/
    constructor(gamePersistenceService, $location, constants, $translate) {
        this.gamePersistenceService = gamePersistenceService;
        this.$location = $location;
        this.constants = constants;
        this.$translate = $translate;
    }

    selectLanguageIfMissing() {
        let selectedLanguage = this.gamePersistenceService.getSelectedLanguage();
        let currentUrl = this.$location.url();
        if (!!selectedLanguage) {
            this.$translate.use(selectedLanguage);
        } else {
            if (!!currentUrl && !currentUrl.startsWith('/choose-language')) {
                this.$location.url(this.constants.url.chooseLanguage);
            }
        }
    }
}

export default LanguageAvailabilityCheckerService;