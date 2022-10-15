

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */

    get acceptCookies () {
        return $('#onetrust-accept-btn-handler');
       
    }

    get businessLink () {
        return $('//a[@href="/business"]');
    }
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
 
    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open();
    }

    async validateURL () {
        await this.acceptCookies.click();
        await this.businessLink.click();
    }
}

module.exports = new LoginPage();
