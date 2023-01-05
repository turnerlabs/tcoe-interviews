const HomePage = require('../pageobjects/home.page');
const CNNPage = require('../pageobjects/cnnPage');

const searchContext = 'Brazil';

describe('Search validation', () => {
    it('should perform a search successfully', async () => {
        await CNNPage.openCNNHome();

        await HomePage.clickAtSeachButton();
        await HomePage.fillSearchField(searchContext);
        await HomePage.clickAtSubmitSearch();

        await browser.pause(5000);
    })
})


