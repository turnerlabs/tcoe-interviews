const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ClickPage extends Page {
    /**
     * define selectors using getter methods
     */
    get buttonBadButton () {return $('#badButton');}


    /**
     * a method to encapsule automation code to interact with the page
     */
    async clickButton() {
        await this.buttonBadButton.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('click');
    }
}

module.exports = new ClickPage();