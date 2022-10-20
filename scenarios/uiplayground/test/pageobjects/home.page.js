

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {
    /**
     * define selectors using getter methods
     */
    get businessLink () {
        return $('=Business');
    }

    get resourcesLink () {
        return $('=Resources');
    }

    get hamburgerLink () {
        return $('.navbar-toggler');
    }

    async clickHamburgerLink(){
        await this.hamburgerLink.click();
    }

    async clickBusinessLink(){
        await this.businessLink.click();
    }

    async clickResourcesLink(){
        await this.resourcesLink.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open();
    }
}

module.exports = new HomePage();
