/*
 * Copyright (C) Schweizerische Bundesbahnen SBB, 2016.
 */
let self;
class NavbarController {
    /*@ngInject*/
    constructor(preScreenLoadingInterceptorsCallerService) {
        self = this;
        preScreenLoadingInterceptorsCallerService.intercept();
        this.name = 'navbar';
    }
}

export default NavbarController;