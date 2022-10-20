
const hooks = require( "../specs/hooks.js");
const homePage = require( "../pageobjects/home.page");
const hiddenLayerPage = require( "../pageobjects/hiddenLayer.page");

describe('page input text section', () => {
    it('Scenario: validate text input section', async () => {
        await hooks.openHomePage();
        await homePage.sectionHiddenLayers();
        await hiddenLayerPage.clickOnBtnGreen();
        await expect(hiddenLayerPage.btnBlueIsDisplayed);
    
    });
});