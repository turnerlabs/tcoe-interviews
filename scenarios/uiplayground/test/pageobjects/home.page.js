const Page = require('./page');

/**
 * UI Testing Playground Home Page
 */
class HomePage extends Page {
    /**
     * Page Locators
     */
    get businessLink () {
        return $('=Business');
    }

    get resourcesLink () {
        return $('=Resources');
    }

    /**
     * Click on Business Link Object
     */
    async clickOnBusinessLink () {
        await this.businessLink.click();
    }

    /**
     * Click on Resources Link Object
     */
    async clickOnResourcesLink () {
        await this.resourcesLink.click();
    }

    /**
     * Open Base Page
     */
    open () {
        return super.open('http://uitestingplayground.com/');
    }
}

module.exports = new HomePage();
