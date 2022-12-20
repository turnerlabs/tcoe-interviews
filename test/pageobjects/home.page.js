const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {
    /**
     * define selectors using getter methods
     */
    get searchIcon () {
        return $('#header-nav-container > div > div.Grid-sc-1kcyc0j-0.sc-iBEsjs.gsHmNy > div > div.Flex-sc-1sqrs56-0.sc-gmeYpB.issgzJ > button > svg');
    }

    get searchMenu () {
        return $('//*[@id="menuButton"]');
    }

    get searchEnter () {
        return $('//*[@id="header-search-bar"]');
    }

    get pressSearch () {
        return $('#pageHeader > div > div > div.header__subnav > div > div.search-bar > form > button');
    }


    /**
     * a method to encapsule automation code to interact with the page
     */
    async clickSearchIcon () {
        await this.searchIcon.waitForDisplayed();
        await this.searchIcon.click();
    }

    async clickSearchMenu () {
        await this.searchMenu.waitForDisplayed();
        await this.searchMenu.click();
    }

    async inputSearch (searchText) {
        await this.searchEnter.waitForDisplayed();
        await this.searchEnter.setValue(searchText);
    }

    async clickSearch () {
        await this.pressSearch.waitForDisplayed();
        await this.pressSearch.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open();
    }
}

module.exports = new HomePage();
