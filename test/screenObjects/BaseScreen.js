const Utils = require('../helpers/Utils');

class BaseScreen {

    constructor(element) {
        Utils.waitForElementDisplayed($(element));
    }
}

module.exports = BaseScreen;