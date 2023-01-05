class SearchPage {
    get searchResultContext() {
        return $('#search__query');
    }

    get searchResultList() {
        return $('.search__results-list');
    }

    get searchResultsModule() {
        return $('.search__results');
    }

    async assertSearchResultContext(searchContext) {
        return await expect(this.searchResultContext).toHaveText(searchContext)
    };

    async assertSearchResultListIsPresent() {
        return await expect(this.searchResultList).toBeDisplayed()
    }

    async waitForResultsBeDisplayed() {
        return await this.searchResultsModule.waitForDisplayed({ timeout: 10000 });
    }
}

module.exports = new SearchPage();
