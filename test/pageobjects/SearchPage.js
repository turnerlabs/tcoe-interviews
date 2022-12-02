class SearchPage {

    constructor() {
        this.searchField = "//input[@class=\"search__input\"]";
        this.resultCount = "//*[@class=\"search__results-count\"]";
    }

    get getSearchField() {
        return $(this.searchField);
    }

    get getResultCount() {
        return $(this.resultCount);
    }
}

module.exports = SearchPage;
