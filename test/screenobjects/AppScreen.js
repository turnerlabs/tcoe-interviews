const GenericActions = require('../helpers/GenericActions.js');

class AppScreen {

    constructor(element) {
        GenericActions.waitForIsShown(`$(${element})`);
    }
}

module.exports = AppScreen;