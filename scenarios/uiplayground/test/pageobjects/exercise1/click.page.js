const Page = require('../page');

/**
 * sub-page containing specific selectors and methods for Click page
 */
class ClickPage extends Page {
    /**
     * define selectors using getter methods
     */
    get badButton () {
        return $('#badButton');
    }

    async clickButton() {
        await this.badButton.waitForClickable();
        await this.badButton.click();
        await browser.pause(1000);
    }

    openPlayground () {
        return super.openPlayground('click');
    }
}

module.exports = new ClickPage();
