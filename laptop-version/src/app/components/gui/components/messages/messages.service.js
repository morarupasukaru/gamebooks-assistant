class MessagesService {
    /*@ngInject*/
    constructor($rootScope, $translate) {
        this.$rootScope = $rootScope;
        this.$translate = $translate;

        if (!this.$rootScope.messages) {
            this.$rootScope.messages = [];
        }
    }

    getMessages() {
        return this.$rootScope.messages || [];
    }

    clearMessages() {
        this.$rootScope.messages.forEach((msg, index, arr) => {
            if (!msg.keepAfterLocationChange) {
                arr.splice(index, 1);
            }
        });
    }

    removeMessage(index) {
        this.$rootScope.messages.splice(index, 1);
    }

    successMessage(msg, keepAfterLocationChange) {
        this._addMessage(msg, 'success', keepAfterLocationChange);
    }

    errorMessage(msg, keepAfterLocationChange) {
        this._addMessage(msg, 'error', keepAfterLocationChange);
    }

    infoMessage(msg, keepAfterLocationChange) {
        this._addMessage(msg, 'info', keepAfterLocationChange);
    }

    _addMessage(msg, type, keepAfterLocationChange) {
        if (!this._hasMessage(msg, type)) {
            this.$rootScope.messages.push({
                message: msg,
                type: type,
                keepAfterLocationChange: keepAfterLocationChange
            });
        }
    }

    _hasMessage(msg, type) {
        let hasMessage = false;
        for (let i = 0; i < this.$rootScope.messages.length; i++) {
            if (this.$rootScope.messages[i].message === msg && this.$rootScope.messages[i].type === type) {
                hasMessage = true;
                break;
            }
        }
        return hasMessage;
    }
}

export default MessagesService;