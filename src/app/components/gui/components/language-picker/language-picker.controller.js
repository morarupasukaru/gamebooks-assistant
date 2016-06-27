let self;
class LanguagePickerController {
    /*@ngInject*/
    constructor(dicesService) {
        self = this;
        self.dicesService = dicesService;
        self.clear();
    }

    roll2d6() {
        self.appendToResult(self.dicesService.rollDices(2, 6));
    }

    roll1d6() {
        self.appendToResult(self.dicesService.rollDices(1, 6));
    }

    clear() {
        self.dicesValue = '';
    }

    appendToResult(value) {
        if (self.dicesValue !== '') {
            self.dicesValue = self.dicesValue + ','
        }
        self.dicesValue = self.dicesValue + value;
    }

}

export default LanguagePickerController;