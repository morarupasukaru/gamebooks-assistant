class HomeController {
    /*@ngInject*/
    constructor($location) {
        $location.url('/games');
    }
}

export default HomeController;