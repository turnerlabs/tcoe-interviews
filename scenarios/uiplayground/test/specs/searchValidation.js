const HomePage = require('../pageobjects/home.page');
const CNNPage = require('../pageobjects/cnnPage');
const SearchPage = require('../pageobjects/search.page')

const searchContext = 'Brazil';

describe('Search validation', () => {
    it('should perform a search successfully', async () => {
        await CNNPage.openCNNHome();

        await HomePage.clickAtSeachButton();
        await HomePage.fillSearchField(searchContext);
        await HomePage.clickAtSubmitSearch();
        
        await browser.pause(5000);

        await SearchPage.waitForResultsBeDisplayed();
        await SearchPage.assertSearchResultContext(searchContext)
        await SearchPage.assertSearchResultListIsPresent();
    })
})


