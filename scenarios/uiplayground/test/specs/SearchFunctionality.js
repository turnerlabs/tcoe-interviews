const BasePage = require('../pageobjects/BasePage');
const HomePage = require('../pageobjects/HomePage')
const SearchPage = require('../pageobjects/SearchPage')
const SearchData = require('../../support/SearchData.json');

describe('Search Functionality Validation', async () =>{   

    it('Should provide input and perform search', async () => {
        BasePage.open();
        await HomePage.clickSearchButton();
        await HomePage.setSearchFieldValue(SearchData.searchDataInput);
        await HomePage.submitSearch();
    });

    it('should validate the search Result' , async () => {
        await SearchPage.validateSearchData();
        await SearchPage.validateSearchList();
    });

});