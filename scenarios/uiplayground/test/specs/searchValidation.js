const HomePage = require('../pageobjects/home.page');
const Utils = require('../utils');
const SearchPage = require('../pageobjects/search.page')

const searchContext = 'Brazil';

describe('Search validation', () => {

    before(async function(){
        await Utils.open();
    });

    it('should fill the form and perform seach', async () => {
        await HomePage.clickAtSeachButton();
        await HomePage.fillSearchField(searchContext);
        await HomePage.clickAtSubmitSearch();
    });

    it('should validate the search results', async() => {
        await SearchPage.waitForResultsBeDisplayed();
        await SearchPage.assertSearchResultContext(searchContext)
        await SearchPage.assertSearchResultListIsPresent();
    })
})


