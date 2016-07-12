/*
 * Copyright (C) Schweizerische Bundesbahnen SBB, 2016.
 */
let self;
class MessagesService {
    /*@ngInject*/
    constructor($rootScope, $translate) {
        self = this;
        self.$rootScope = $rootScope;
        self.$translate = $translate;

        if (!self.$rootScope.messages) {
            self.$rootScope.messages = [];
        }
    }

    getMessages() {
        return self.$rootScope.messages || [];
    }

    clearMessages() {
        self.$rootScope.messages.forEach((msg, index, arr) => {
            if (!msg.keepAfterLocationChange) {
                arr.splice(index, 1);
            }
        });
    }

    removeMessage(index) {
        self.$rootScope.messages.splice(index, 1);
    }

    successMessage(msg, keepAfterLocationChange) {
        self._addMessage(msg, 'success', keepAfterLocationChange);
    }

    errorMessage(msg, keepAfterLocationChange) {
        self._addMessage(msg, 'error', keepAfterLocationChange);
    }

    infoMessage(msg, keepAfterLocationChange) {
        self._addMessage(msg, 'info', keepAfterLocationChange);
    }

    _addMessage(msg, type, keepAfterLocationChange) {
        let translatedMsg = self.$translate.instant(msg);
        if (!self._hasMessage(translatedMsg, type)) {
            self.$rootScope.messages.push({
                message: translatedMsg,
                type: type,
                keepAfterLocationChange: keepAfterLocationChange
            });
        }
    }

    _hasMessage(msg, type) {
        let hasMessage = false;
        let i;
        for (i = 0; i < self.$rootScope.messages.length; i++) {
            if (self.$rootScope.messages[i].message === msg && self.$rootScope.messages[i].type === type) {
                hasMessage = true;
                break;
            }
        }
        return hasMessage;
    }
}

export default MessagesService;