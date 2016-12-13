class HomeController {

    /*@ngInject*/
    constructor($location, constants) {
        $location.url(constants.url.games);
    }
}

export default HomeController;