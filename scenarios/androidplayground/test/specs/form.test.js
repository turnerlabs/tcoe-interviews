const HomePage = require('../pageobjects/HomePage');

describe('Form test', () => {
    it('Should validate that form tab is available for selection and is clickable', async () => {
        homePage = new HomePage();
        await expect(await homePage.formAvailabilityAndClickability()).toEqual(true);
    })
    it('Should validate the default selection of the tab', async () => {
        formPage = await homePage.goToForm();
        await expect(await formPage.formsComponent()).toEqual(true);
    })
    it('Should validate that keyboard is available to provide input in the text field', async () => {
        await expect(await formPage.keyBoardValidator()).toEqual(true);
        await driver.hideKeyboard();
    })
    it('Should validate the input behavior is working as intended', async () => {
        await expect(await formPage.formsInput('test working')).toEqual(true);
    })
    it('Should validate that picker element is working and it has 3 options to choose from', async () => {
        dropdown = await formPage.goToDropdown();
        await expect(await dropdown.dropdownExisting()).toEqual(true);
        await expect(await dropdown.dropdownOptions()).toEqual(true);
    })
    it('Should validate that all options from picker elements are visible within the screen', async () => {
        await expect(await dropdown.dropdownOptionsVisibility()).toEqual(true);
        await dropdown.selectingOption();
    })
    it('Should validate that Inactive button is not interactable', async () => {
        await expect(await formPage.inactiveButtonvalidation()).toEqual(true);
    })
    it('Should validate that android native alerts are functional', async () => {
        contentAlert = await formPage.goToContentAlert();
        await expect(await contentAlert.nativeAlertisDisplayed()).toEqual(true);
    })
});