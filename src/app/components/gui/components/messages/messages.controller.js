class MessagesController {
    /*@ngInject*/
    constructor(messagesService, $rootScope, $scope) {
        this.messagesService = messagesService;

        $rootScope.$on('$locationChangeStart', () => this.messagesService.clearMessages());

        this.messages = messagesService.getMessages();

        let self = this;
        $scope.removeMessage = function(index) {
           self.messagesService.removeMessage(index);
        }
    }
}

export default MessagesController;