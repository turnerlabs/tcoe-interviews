const HomePage = require('../pageobjects/home.page')
const SearchResultsPage = require('../pageobjects/SearchResults.page');

describe('Search some text on CNN', () => {
    it('Navigate to the URL', async () => {
        await HomePage.open();
    });
    it('Validate site search functionality', async () => {
        const searchItem = 'Current News';
        await HomePage.open();
        await HomePage.doSearch(searchItem);
        await expect(SearchResultsPage.searchTxt).toBeExisting();
        await expect(SearchResultsPage.searchTxt).toHaveTextContaining(searchItem);
    });
});