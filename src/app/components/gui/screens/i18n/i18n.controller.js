import i18n_en from '../../../../i18n/en.js';
import i18n_fr from '../../../../i18n/fr.js';

class I18nController {
    /*@ngInject*/
    constructor(preScreenLoadingInterceptorsCallerService, $stateParams, messagesService, $translate) {
        preScreenLoadingInterceptorsCallerService.intercept();
        this.messagesService = messagesService;
        this.$translate = $translate;
        this.language = $stateParams.language;
        this.initData();
    }

    initData() {
        let i18n = null;
        if (this.language === 'fr') {
            i18n = i18n_fr;
        } else if (this.language === 'en') {
            i18n = i18n_en;
        } else {
            this.messagesService.errorMessage(this.$translate.instant("LanguageUnsupported", {languageCode: this.language }), false);
        }
        if (!!i18n) {
            this.i18nKeysValues = '';
            let keys = Object.keys(i18n);
            keys.sort(
                function (a, b) {
                    a = a.toUpperCase();
                    b = b.toUpperCase();
                    if (a > b) {
                        return 1;
                    } else if (a < b) {
                        return -1;
                    } else {
                        return 0;
                    }
                }
            );
            for (let i = 0; i< keys.length; i++) {
                let i18nText = this.textWithBrace(keys[i]) + ': ' + this.textWithBrace(i18n[keys[i]]);
                this.i18nKeysValues = this.i18nKeysValues + i18nText + ',\n';
            }
        }
    }

    textWithBrace(text) {
        if (text.indexOf("'") !== -1) {
            return '"' + text + '"';
        } else {
            return "'" + text + "'";
        }
    }
}

export default I18nController;