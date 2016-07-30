let self;
class StatsController {
    /*@ngInject*/
    constructor(preScreenLoadingInterceptorsCallerService) {
        self = this;
        preScreenLoadingInterceptorsCallerService.intercept();
    }

    increment(row) {
        row.current = row.current + 1;
    }

    decrement(row) {
        row.current = row.current - 1;
    }
}

export default StatsController;