const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SearchPage extends Page {

    /**
     * define selectors using getter methods
     */
    get searchBtn () {return $("button[data-test='searchButton']");}
    get searchBar () {return $("#header-search-bar");}

    /**
     * overwrite specific options to adapt it to page object
     */
     open () {
        return super.open('');
    }
    /**
     * 
     * @returns search button
     */
    async getSearchButton() {
        await this.searchBtn.waitForDisplayed()
        return await this.searchBtn
    }

    /**
     * this method press search icon button
     */
    async pressSearchBtn(){
        await this.searchBtn.waitForClickable();
        await this.searchBtn.click();
    }

    /**
     * this method sent keyword to searchBar
     * @param {*} value keyword to find
     */
    async setValueSearchBar(value){
       // await this.searchBar.waitForDisplayed();
        await this.searchBar.setValue(value)
    }

    /**
     * this method get the current value on search bar
     */
    async getValueSearchBar(){
        //await this.searchBar.waitForDisplayed();
        await this.searchBar.getValue();
    }

}

module.exports = new SearchPage();
