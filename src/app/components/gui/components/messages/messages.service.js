/*
 * Copyright (C) Schweizerische Bundesbahnen SBB, 2016.
 */
let self;
class MessagesService {
    /*@ngInject*/
    constructor($rootScope) {
        self = this;
        self.$rootScope = $rootScope;

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
        if (!self._hasMessage(msg, type)) {
            self.$rootScope.messages.push({
                message: msg,
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