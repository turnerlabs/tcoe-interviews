const homePage = require('../pageobjects/Home.page.js');
const genericActions = require('../helpers/GenericActions.js');
const data = require('../../data/searchTestData.js');

describe('Validate site search functionality', () => {

    let searchPage;

    beforeEach(async() => {
        await homePage.open();
        await genericActions.maximizeWindow();
        await homePage.clickOnSearchButton();
    });
    
    it('Validate site search functionality with for: No text provided', async() => {
        searchPage = await homePage.performSearch();
        await expect(await searchPage.queryIsDisplayed(), 'Search is not working as intended when no text is provided').to.be.false;
    });

    data.forEach(data => {
        it(`Validate site search functionality with for: ${data.type}`, async() => {
            await homePage.typeOnSearchFormInput(data.text);
            searchPage = await homePage.performSearch();
            await expect(await searchPage.getTextSearchQuery()).to.equal(data.expectedResult, `Search is not working as intended with ${data.type}`);
        });
    });
});