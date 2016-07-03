let self;
class TestPopupController {
    /*@ngInject*/
    constructor(preScreenLoadingInterceptorsCallerService) {
        self = this;
        preScreenLoadingInterceptorsCallerService.intercept();
    }

    basicPopup() {
        alert('test');
    }

    basicPopupYesNo() {
        confirm('question?');
    }

    showPopup(modalElementId) {
        let modalElement = window.document.getElementById(modalElementId);
        modalElement.style.display = "block";
    }

    closePopup(modalElementId) {
        let modalElement = window.document.getElementById(modalElementId);
        modalElement.style.display = "none";
    }
}

export default TestPopupController;