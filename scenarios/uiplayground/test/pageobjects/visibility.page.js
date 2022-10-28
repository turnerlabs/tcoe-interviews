const Page = require('./page');

/**
 * Visibility Page
 */
class VisibilityPage extends Page {
    /**
     * Page Locators
     */
    get hideButton () {
        return $('#hideButton');
    }

    get unHideButton () {
        return $('#unhideButton');
    }

    /**
     * Click on Hide Button
     */
    async clickOnHideButton() {
        await this.hideButton.click();
    }

    /**
     * Open Base Page
     */
    open () {
        return super.open('visibility');
    }
}

module.exports = new VisibilityPage();
