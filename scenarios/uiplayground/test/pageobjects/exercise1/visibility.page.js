const Page = require('../page');

/**
 * sub-page containing specific selectors and methods for Visibility page
 */
class VisibilityPage extends Page {
    /**
     * define selectors using getter methods
     */
    get hideButton () {
        return $('#hideButton');
    }

    get invisibleButton () {
        return $('#invisibleButton');
    }

    async clickHide () {
        await this.hideButton.click();
    }

    openPlayground () {
        return super.openPlayground('visibility');
    }
}

module.exports = new VisibilityPage();
