class HomeController {

    /*@ngInject*/
    constructor($location, preScreenLoadingInterceptorsCallerService, constants) {
        preScreenLoadingInterceptorsCallerService.intercept();
        $location.url(constants.url.games);
    }
}

export default HomeController;