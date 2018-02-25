/**
 * Initialisation of the modules (specific order required).
 */
_.i18n.initialize();
_.data.initialize();
debugger;
if (!!_.screens) {
    var i;
    for (i = 0; i < _.screens.length; i++) {
        _.screens[i]();
    }
}

// TODO still too complex