
const Page = require('./page');

class HomePage extends Page {

    /**
     * define selectors using getter methods
     */
    get searchBtn () {
        return $('//button[@data-test="searchButton"]');
    }

    get searchBox () {
        return $('//input[@id="header-search-bar"]');
    }

    get doSearchBtn () {
        return $('//button[@aria-label="Search"]');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */

    async doSearch(txt){
        await this.searchBtn.click();
        await this.searchBox.setValue(txt);
        await this.doSearchBtn.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('');
    }
}

module.exports = new HomePage();
