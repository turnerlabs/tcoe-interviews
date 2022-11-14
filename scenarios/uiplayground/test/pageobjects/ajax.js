

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class AjaxPage extends Page {
    /**
     * define selectors using getter methods
     */
    get triggerButton () {
        return $('#ajaxButton');
    }

    get content () {
        return $('#content');
    }

    async clickButton (element) {
        await element.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('ajax');
    }
}

module.exports = new AjaxPage();
