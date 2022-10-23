const Page = require('./page');

/**
 * Home page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {
    TITLE = "UI Test Automation Playground";
    /**
     * overwrite specific options to adapt it to page object
     */
    open (pageLink) {
        return super.open(pageLink);
    }
    async verifyPage(pageLink) {
        await super.verifyUrl(pageLink);
        await super.verifyTitle(this.TITLE);
      }
}

module.exports = new HomePage();
