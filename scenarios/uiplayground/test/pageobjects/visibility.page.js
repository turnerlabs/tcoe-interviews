const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class VisibilityPage extends Page {
    /**
     * define selectors using getter methods
     */
    get hideButton () {
        return $('#hideButton');
    }

    get unhideButton () {
        return $('#unhideButton');
    }

    async clickHideButton () {
        await this.hideButton.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('visibility');
    }
}

module.exports = new VisibilityPage();