class Search {
    async open(path) {
        await browser.maximizeWindow();
        return browser.url(path);
    }

    get inputSearch() {
        return $('input[id="header-search-bar"]');
    }

    get iconSearch() {
        return $('button[data-test="searchButton"]');
    }

    get btnSearch() {
        return $('button[aria-label="Search"]');
    }

    get searchResults() {
        return $('span[class="search__no-results__message"]')
    }

    get elemNoResults() {
        return $('button[class="search__no-results search__no-results--show"]');
    }

    async invalidSearch(textToSearch) {
        let noResult = "Your search for " + textToSearch + "did not match any results";
        await this.iconSearch.click();
        await this.inputSearch.setValue(textToSearch);
        await this.btnSearch.click();
        expect(this.searchResults).toHaveTextContaining(noResult);
    }

    async validSearch(textToSearch) {
        let searchResult = "Displaying 1-10 results out of";
        await this.iconSearch.click();
        await this.inputSearch.setValue(textToSearch);
        await this.btnSearch.click();
        expect(this.searchResults).toHaveTextContaining(textToSearch);
        expect(this.searchResults).toHaveTextContaining(searchResult);
    }

    async validateBlankSearch() {
        await this.iconSearch.click();
        await this.inputSearch.setValue("");
        await this.btnSearch.click();
        expect(this.elemNoResults).toExist();
    }
}

module.exports = new Search();
