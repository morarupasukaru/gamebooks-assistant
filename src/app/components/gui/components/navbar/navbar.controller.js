/*
 * Copyright (C) Schweizerische Bundesbahnen SBB, 2016.
 */
let self;
class NavbarController {
    /*@ngInject*/
    constructor(preScreenLoadingInterceptorsCallerService, $location) {
        self = this;
        preScreenLoadingInterceptorsCallerService.intercept();
        this.name = 'navbar';
        let params = $location.search();
        if (!!params.admin) {
            this.admin = true;
        }
    }
}

export default NavbarController;