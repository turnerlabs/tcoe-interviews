const homepage = require('../pageobjects/homePage.js');
const formsPage = require('../pageobjects/formsPage.js');
const commonActions = require('../util/commonActions.js');
const constants = require('../constants/constants.js');
const testData = require('../testdata/sample.json');

describe('Warner media applications', () => {
    it('Validate the default selection of the tab', async () => {
        await homepage.verifyHomePage();
        await homepage.verifyDefaultSelectionTab();
    });

    it('Validate that form tab is available for selection and is clickable', async() => {
        await homepage.verifyFormsTabToBeClickable();
    });

    it('Validate the color change on the selection of the form tab', async() => {
        await commonActions.compareButtonColor(constants.screenShotName);// Creates a baseline image in temp folder, if not available
        await homepage.clickFormsTab();
        expect(await commonActions.compareButtonColor(constants.screenShotName)).toBeFalsy();// Compares with baseline image after click
    });

    it('Validate the Input behaviour is working as intended', async() => {
        await formsPage.verifyFormsPageHeader();
        await formsPage.validateInputFieldToEnterText();
        await formsPage.enterTextAnInputField(testData.sampleData[0].sampleEnteredValue);
        await formsPage.validateTypedField();
    });

    it('Validate that picker element is working and it has 3 options to choose from.', async () => {
        expect(await formsPage.getSelectDropDownOptions()).toEqual(constants.selectDropDownValuesCount);
    });

    it('Validate that all options from picker elements are visible within the screen', async () => {
        expect(await formsPage.verifyDropDownElementsWithinScreen()); // Verified using screen resolution and bounds values of every element
        await formsPage.verifyDropDownFunctionality(); // Verified drop down functionality
    });

    it('Validate that Inavtive button is not interactable', async() => {
        await formsPage.verifyInActiveButtonStatus();
    });

    it('Validate that android native alerts are functional', async() => {
        let buttonSize;
        buttonSize = await testData.alertButtonTypes.length;
        for (let i =0; i < buttonSize; i++) {
            await formsPage.clickActiveButton();
            await formsPage.verifyAlertPopup();
            await formsPage.clickAlertPopupButton(testData.alertButtonTypes[i]);
        }
    });

    it('Validate that keyboard is available to provide input in the text field', async() =>{
        await formsPage.verifyKeyboardIsShown();
    });
})


