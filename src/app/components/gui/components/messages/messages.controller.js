/*
 * Copyright (C) Schweizerische Bundesbahnen SBB, 2016.
 */
let self;
class MessagesController {
    /*@ngInject*/
    constructor(messagesService, $rootScope) {
        self = this;
        self.messagesService = messagesService;

        $rootScope.$on('$locationChangeStart', () => self.messagesService.clearMessages());

        self.messages = messagesService.getMessages();
    }

    removeMessage(index) {
        self.messagesService.removeMessage(index);
    }
}

export default MessagesController;