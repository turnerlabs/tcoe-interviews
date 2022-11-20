const Page = require('../page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SearchPage extends Page {

    get inputSearch(){
        return $('input[class="search__input"]')
    }

    get clearSearch(){
        return $('button[class="search__clear"]')
    }

    get searchButton(){
        return $('button[aria-label="Search"]')
    }

    get noSearchResult(){
        return $('[class="search__no-results__message"]')
    }

    /**
    * overwrite specific options to adapt it to page object
    */
    open () {
        return super.open('search');
    }

    async addInputSearch(searchText){
        return this.inputSearch.setValue(searchText);
    }

    async getInputSearch(){
        return this.inputSearch.getValue();
    }

    async noSearchResultMsg(){
        return this.noSearchResult.getText();
    }

    async hitClearSearch(){
        return this.clearSearch.click();
    }

    async performSearch(searchText){
        await this.clearSearch.waitForClickable();
        await this.clearSearch.click();
        await this.inputSearch.waitForClickable();
        await this.inputSearch.setValue(searchText);
        return this.searchButton.click();
    }
}

module.exports = new SearchPage();
