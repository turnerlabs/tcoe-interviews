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

    async getSearchButton() {
        await this.searchBtn.waitForDisplayed()
        return await this.searchBtn
    }

    async pressSearchBtn(){
        await this.searchBtn.waitForClickable();
        await this.searchBtn.click();
    }

    async setValueSearchBar(value){
       // await this.searchBar.waitForDisplayed();
        await this.searchBar.setValue(value)
    }

    async getValueSearchBar(){
        //await this.searchBar.waitForDisplayed();
        await this.searchBar.getValue();
    }

}

module.exports = new SearchPage();
