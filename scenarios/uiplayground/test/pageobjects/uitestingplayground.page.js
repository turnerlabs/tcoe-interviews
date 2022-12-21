
const Page = require('./page');
/**
 * sub page containing specific selectors and methods for a specific page
 */
class Uitestingplayground extends Page {
    /**
     * define selectors using getter methods
     */
    get citationBlockquote() {
        return $('#citation p');
    }

    get recourcesLink() {
        return $('[href="/resources"]');
    }

    get overviews() {
        return $$('#overview .container div.col-sm h3')
    }

    get description() {
        return $('#description')
    }

    /**
         * a method to click on button
         */
    async clickOnButton() {
        await (await this.recourcesLink).waitForClickable()
        await this.recourcesLink.click()
    }

    /**
         * a method to wait page loaled
         */
    async waitPageLoaded() {
        await (await this.description).waitForDisplayed()

    }
    /**
       * overwrite specific options to adapt it to page object
       */
    open() {
        return super.open('');
    }
}
module.exports = new Uitestingplayground();
