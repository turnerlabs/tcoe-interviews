/**
 * sub page containing specific selectors and methods for a specific page
 */
class SearchResultsPage{
    /**
     * define selectors using getter methods
     */
    get searchTxt () {
        return $('#search__query');
    }
}

module.exports = new SearchResultsPage();
