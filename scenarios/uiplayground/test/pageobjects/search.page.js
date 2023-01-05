class SearchPage {
    get searchResultContext() {
        return $('#search__query');
    };

    get searchResultList() {
        return $('.search__results-list');
    };

    get searchResultsModule() {
        return $('.search__results');
    };

    async assertSearchResultContext(searchContext) {
        return expect(this.searchResultContext).toHaveText(searchContext)
    };

    async assertSearchResultListIsPresent() {
        return expect(this.searchResultList).toBeDisplayed()
    };

    async waitForResultsBeDisplayed() {
        return this.searchResultsModule.waitForDisplayed({ timeout: 10000 });
    };
}

module.exports = new SearchPage();
