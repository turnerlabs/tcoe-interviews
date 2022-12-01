const SearchPage = require('./../pageobjects/searchPage/search.page')

describe('Search for a term in SearchBox', async () => {

    // click on search button and search for specific term
    it('should search for a term', async () => {
        SearchPage.open();
        SearchPage.searchFor('qatar');
        //************Create Expects********************//
        //expect the results are displayed according the search term 
        expect(SearchPage.searchResults).toBeDisplayed();
    });
});

