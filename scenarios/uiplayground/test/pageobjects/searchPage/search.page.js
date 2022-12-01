const Page = require('./../page');

class SearchPage extends Page {
    /**
    * define selectors using getter methods
    */
    get searchButton() { return $('button[class="bbcXuS"]'); }
    get searchInput() { return $('#header-search-bar'); }
    get searchResultButton() { return $('button[class="JwELA"]') }
    get searchResults() { return $$('#search'); }

    //create search functionality 
    searchFor(term) {
        this.searchButton.click();
        this.searchInput.setValue(term);
        this.searchResultButton.click();
        this.searchResults.waitForDisplayed();
    }

    open() {
        super.open('')
    }
}

module.exports = new SearchPage();