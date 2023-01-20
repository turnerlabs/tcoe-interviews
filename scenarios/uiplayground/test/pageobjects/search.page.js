class SearchPage {

    get searchBar() {
        return $('#header-search-bar')
    }

    get searchButton() {
        return $('[aria-label="Search"]')
    }

    get searchResultsCounter() {
        return $('.search__results-count')
    }

    get queryValue() {
        return $('.search__results-count > strong')
    }

    async searchAndVerifyQueryValue(valueToBeSearched) {
        
        await this.searchBar.waitForDisplayed()
        await this.searchBar.setValue(valueToBeSearched)

        await this.searchButton.click()
        
        await this.queryValue.waitForExist()
        await expect(this.queryValue.getText()).toHaveValueContaining(valueToBeSearched)
    }

    async searchWithNoValue() {
        await this.searchBar.waitForDisplayed()
        await this.searchBar.setValue(null)

        await this.searchButton.click()

        await this.searchResultsCounter.waitForDisplayed()
    }
}

module.exports = new SearchPage()