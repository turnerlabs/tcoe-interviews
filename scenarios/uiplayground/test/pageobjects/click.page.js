const Page = require('./page');

/**
 * Click Page
 */
class ClickPage extends Page {
    /**
     * Page Locators
     */
    get clickEventButton() {
        return $('#badButton')
    }

    /**
     * Click on Click Event Button
     */
    async clickOnClickEventButton() {
        await this.clickEventButton.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open() {
        return super.open('click');
    }
}

module.exports = new ClickPage();