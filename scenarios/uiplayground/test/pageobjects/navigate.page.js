const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class NavigatePage extends Page {
    /**
     * define selectors using getter methods
     */

    get linkDynamicId () {
        return $('=Dynamic ID');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async dynamicId () {
        await this.linkDynamicId.click();
    }
    

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('dynamicId');
    }
}

module.exports = new NavigatePage();
