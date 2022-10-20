
const hooks = require( "../specs/hooks.js");
const homePage = require( "../pageobjects/home.page");
const clickPage = require( "../pageobjects/click.page");

describe('page click section', () => {

    it('Scenario: validate click section', async () => {
        await hooks.openHomePage();
        await homePage.sectionClick();
        await clickPage.pageClick();
        await expect(clickPage.btnSuccess).toBeDisplayed()
        await expect(browser).toHaveUrlContaining('click')
  
    });
});