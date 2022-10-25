

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get btnSubmit () {
        return $('button[type="submit"]');
    }
      /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('page');
    }
}

module.exports = new LoginPage();
