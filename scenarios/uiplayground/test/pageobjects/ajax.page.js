

const Page = require('./page');
/**
 * sub page containing specific selectors and methods for a specific page
 */
class Ajax extends Page {
    /**
     * define selectors using getter methods
     */
    get ajaxButton() {
        return $('button#ajaxButton');
    }

    get singleMessage() {
        return $$('#content > p');
    }
    get spinner() {
        return $('i#spinner');
    }
    /**
    * a method to two click on the button
    */
    async twoClickOnPlayground() {
        await (await this.ajaxButton).waitForClickable();
        await this.ajaxButton.click();
        await (await this.spinner).waitForDisplayed({ reverse: true })
        await this.ajaxButton.click();
        await (await this.spinner).waitForDisplayed({ reverse: true })
     }
    /**
    * overwrite specific options to adapt it to page object
    */
    open() {
        return super.open('ajax');
    }
}
module.exports = new Ajax();
