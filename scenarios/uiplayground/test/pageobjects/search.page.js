

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SearchPage extends Page {
    /**
     * define selectors using getter methods
     */
    get searchBox () {
        return $('//button[@class="sc-bdVaJa sc-jKVCRD bbcXuS"]//*[name()="svg"]');
    }

    get inputSearch () {
        return $('#header-search-bar');
    }

    get btnSearch () {
        return $('//div[@class="Box-sc-1fet97o-0 iKQPmQ"]//div[@class="Box-sc-1fet97o-0 bQmsQJ"]//*[name()="svg"]//*[name()="path" and contains(@d,"M1.53,8.52")]');
    }

    get SearchItem () {
        return $('//strong[@id="search__query"]');
    }
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async Search () {
        await this.searchBox.click();
       
        await this.inputSearch.setValue("latest");
        await this.btnSearch.click();
        await this.SearchItem.getText();
         
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open (path) {
        browser.maximizeWindow();
        return super.open('');
    }
}

module.exports = new SearchPage();
